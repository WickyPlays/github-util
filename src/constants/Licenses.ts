export interface License {
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

export const LICENSE_DATA: Record<string, Omit<License, 'name' | 'displayName' | 'content'>> = {
  'agpl3-header': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'agpl3': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'apache-header': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'apache': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'bsd2': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'bsd3': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc0-header': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: false, warranty: false },
    conditions: { notice: false }
  },
  'cc0': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: false, warranty: false },
    conditions: { notice: false }
  },
  'cc-by-header': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-nc-header': {
    permissions: { commercialUse: false, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-nc': {
    permissions: { commercialUse: false, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-nc-nd-header': {
    permissions: { commercialUse: false, modification: false, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-nc-nd': {
    permissions: { commercialUse: false, modification: false, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-nc-sa-header': {
    permissions: { commercialUse: false, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-nc-sa': {
    permissions: { commercialUse: false, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-nd-header': {
    permissions: { commercialUse: true, modification: false, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-nd': {
    permissions: { commercialUse: true, modification: false, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-sa-header': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cc-by-sa': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'cddl': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'epl': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'gpl2': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'gpl3-header': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'gpl3': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'isc': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'lgpl': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'mit': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'mpl-header': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'mpl': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'unlicense': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: false, warranty: false },
    conditions: { notice: false }
  },
  'wtfpl-header-warranty': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: false, warranty: false },
    conditions: { notice: false }
  },
  'wtfpl-header': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: false, warranty: false },
    conditions: { notice: false }
  },
  'wtfpl': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: false, warranty: false },
    conditions: { notice: false }
  },
  'x11': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  },
  'zlib': {
    permissions: { commercialUse: true, modification: true, distribution: true, privateUse: true },
    limitations: { liability: true, warranty: true },
    conditions: { notice: true }
  }
};

// Map for proper display names
export const LICENSE_DISPLAY_NAMES: Record<string, string> = {
  'agpl3': 'AGPL 3.0',
  'apache': 'Apache 2.0',
  'bsd2': 'BSD 2-Clause',
  'bsd3': 'BSD 3-Clause',
  'cc0': 'CC0 1.0',
  'cc_by': 'CC BY 4.0',
  'cc_by_nc': 'CC BY-NC 4.0',
  'cc_by-nc_nd': 'CC BY-NC-ND 4.0',
  'cc_by-nc_sa': 'CC BY-NC-SA 4.0',
  'cc_by_nd': 'CC BY-ND 4.0',
  'cc_by_sa': 'CC BY-SA 4.0',
  'cddl': 'CDDL 1.0',
  'epl': 'EPL 2.0',
  'gpl2': 'GPL 2.0',
  'gpl3': 'GPL 3.0',
  'isc': 'ISC',
  'lgpl': 'LGPL',
  'mit': 'MIT',
  'mpl': 'MPL 2.0',
  'unlicense': 'Unlicense',
  'wtfpl': 'WTFPL',
  'x11': 'X11',
  'zlib': 'Zlib'
};