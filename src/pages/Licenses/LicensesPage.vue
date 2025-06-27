<script lang="ts">
import { ref, computed } from 'vue';
import './LicensesPage.scss';
import { MdDownload, MdArrowBackIos } from 'vue-icons-plus/md'
import { LICENSE_DATA, LICENSE_DISPLAY_NAMES } from '../../constants/Licenses';

interface License {
  name: string;
  displayName: string;
  content: string;
  permissions: {
    commercialUse: boolean;
    modification: boolean;
    distribution: boolean;
    privateUse: boolean;
  };
  limitations: {
    liability: boolean;
    warranty: boolean;
  };
  conditions: {
    notice: boolean;
  };
}

export default {

  components: {
    MdDownload,
    MdArrowBackIos
  },

  setup() {
    const licenses = ref<License[]>([]);
    const selectedLicense = ref<License | null>(null);
    const projectName = ref('');
    const organization = ref('');
    const year = ref(new Date().getFullYear().toString());
    const processedContent = ref('');

    // Filter options
    const filterOptions = ref({
      filterAll: true,
      // Permissions
      commercialUse: false,
      modification: false,
      distribution: false,
      privateUse: false,
      // Limitations
      liability: false,
      warranty: false,
      // Conditions
      notice: false
    });

    const filteredLicenses = computed(() => {
      if (filterOptions.value.filterAll || !Object.values(filterOptions.value).some((v, k) => k !== 'filterAll' && v)) {
        return licenses.value;
      }

      return licenses.value.filter(license => {
        return (
          // Permissions
          (!filterOptions.value.commercialUse || license.permissions.commercialUse) &&
          (!filterOptions.value.modification || license.permissions.modification) &&
          (!filterOptions.value.distribution || license.permissions.distribution) &&
          (!filterOptions.value.privateUse || license.permissions.privateUse) &&
          // Limitations
          (!filterOptions.value.liability || license.limitations.liability) &&
          (!filterOptions.value.warranty || license.limitations.warranty) &&
          // Conditions
          (!filterOptions.value.notice || license.conditions.notice)
        );
      });
    });

    const loadLicenses = async () => {

      const files = import.meta.glob('../../assets/licenses/*.txt', { query: 'raw', import: 'default' });

      for (const [path, loader] of Object.entries(files)) {
        const fileContent = await (loader as () => Promise<string>)();
        const fileName = path.split('/').pop()?.replace('.txt', '') || '';
        const displayName = fileName.split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        const licenseKey = fileName.toLowerCase();
        const licenseInfo = LICENSE_DATA[licenseKey] || {
          permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
          limitations: { liability: false, warranty: false },
          conditions: { notice: false }
        };

        licenses.value.push({
          name: fileName,
          displayName,
          content: fileContent,
          permissions: licenseInfo.permissions,
          limitations: licenseInfo.limitations,
          conditions: licenseInfo.conditions
        });
      }

      if (licenses.value.length > 0) {
        selectedLicense.value = licenses.value[0];
        processLicenseContent();
      }
    };

    const processLicenseContent = () => {
      if (!selectedLicense.value) return;

      const project = projectName.value || '{{project}}';
      const org = organization.value || '{{organization}}';
      const yr = year.value || '{{year}}';

      processedContent.value = selectedLicense.value.content
        .replace('{{ project }}', project)
        .replace('{{ organization }}', org)
        .replace('{{ year }}', yr);
    };

    const downloadLicense = () => {
      if (!processedContent.value) return;

      const element = document.createElement('a');
      const licenseName = selectedLicense.value?.name || 'license';
      const file = new Blob([processedContent.value], { type: 'text/plain' });

      element.href = URL.createObjectURL(file);
      element.download = `${licenseName.toUpperCase()}_LICENSE.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    const updateFilter = (option: keyof typeof filterOptions.value) => {
      if (option === 'filterAll') {
        // When "Filter All" is selected, uncheck all other filters
        Object.keys(filterOptions.value).forEach(key => {
          if (key !== 'filterAll') {
            filterOptions.value[key] = false;
          }
        });
        filterOptions.value.filterAll = true;
      } else {
        // When any other filter is selected, uncheck "Filter All"
        filterOptions.value.filterAll = false;
        filterOptions.value[option] = !filterOptions.value[option];
      }
    };
    return {
      licenses: filteredLicenses,
      selectedLicense,
      projectName,
      organization,
      year,
      processedContent,
      filterOptions,
      loadLicenses,
      processLicenseContent,
      downloadLicense,
      updateFilter,
      selectLicense: (license: License) => {
        selectedLicense.value = license;
        processLicenseContent();
      },
      LICENSE_DISPLAY_NAMES
    };
  },

  mounted() {
    this.loadLicenses();
  }
};
</script>

<template>
  <div class="licenses-page">
    <div class="tab-container">
      <div>
        <div class="title-container">
          <button class="btn-back" @click="$router.back()">
            <MdArrowBackIos />
          </button>
          <h1 class="title">Github Util</h1>
        </div>
        <p class="subtitle">License picker</p>
      </div>
      <div class="form-fields">
        <div class="form-group">
          <label for="projectName">Project Name</label>
          <input id="projectName" v-model="projectName" @input="processLicenseContent" />
        </div>

        <div class="form-group">
          <label for="organization">Organization</label>
          <input id="organization" v-model="organization" @input="processLicenseContent" />
        </div>

        <div class="form-group">
          <label for="year">Year Licensed</label>
          <input id="year" v-model="year" @input="processLicenseContent" />
        </div>
      </div>

      <div class="filter-section">
        <h3>Filter Licenses</h3>

        <div class="filter-group">
          <div class="filter-options">
            <label>
              <input type="checkbox" :checked="filterOptions.filterAll" @change="updateFilter('filterAll')" />
              Show All Licenses
            </label>
          </div>
        </div>

        <div class="filter-group">
          <h4>Permissions</h4>
          <div class="filter-options">
            <label>
              <input type="checkbox" :checked="filterOptions.commercialUse" @change="updateFilter('commercialUse')" />
              Commercial use
            </label>
            <label>
              <input type="checkbox" :checked="filterOptions.modification" @change="updateFilter('modification')" />
              Modification
            </label>
            <label>
              <input type="checkbox" :checked="filterOptions.distribution" @change="updateFilter('distribution')" />
              Distribution
            </label>
            <label>
              <input type="checkbox" :checked="filterOptions.privateUse" @change="updateFilter('privateUse')" />
              Private use
            </label>
          </div>
        </div>

        <div class="filter-group">
          <h4>Limitations</h4>
          <div class="filter-options">
            <label>
              <input type="checkbox" :checked="filterOptions.liability" @change="updateFilter('liability')" />
              Liability
            </label>
            <label>
              <input type="checkbox" :checked="filterOptions.warranty" @change="updateFilter('warranty')" />
              Warranty
            </label>
          </div>
        </div>

        <div class="filter-group">
          <h4>Conditions</h4>
          <div class="filter-options">
            <label>
              <input type="checkbox" :checked="filterOptions.notice" @change="updateFilter('notice')" />
              License and copyright notice
            </label>
          </div>
        </div>
      </div>

      <div class="license-buttons">
        <button v-for="license in licenses" :key="license.name" @click="selectLicense(license)">
          {{ LICENSE_DISPLAY_NAMES[license.name] || license.displayName }}
        </button>
      </div>
    </div>

    <div class="license-content">
      <div class="license-toolbar" v-if="selectedLicense">
        <p>LICENSE output</p>
        <button @click="downloadLicense" class="btn-download">
          <MdDownload />
          <p>Download</p>
        </button>
      </div>
      <textarea v-if="selectedLicense" v-model="processedContent" readonly></textarea>
      <div v-else class="no-license-selected">
        Loading licenses or no licenses available...
      </div>
    </div>
  </div>
</template>