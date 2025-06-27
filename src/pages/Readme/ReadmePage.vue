<script lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import { MdDownload, MdArrowBackIos } from 'vue-icons-plus/md';
import { parseMarkdown } from '../../utils/markdown-format';
import './ReadmePage.scss';
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';

export default {
  components: {
    MdDownload,
    MdArrowBackIos
  },

  setup() {
    const markdownInput = ref('');
    const parsedMarkdown = computed(() => parseMarkdown(markdownInput.value));

    watch(parsedMarkdown, async () => {
      await nextTick();
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    });

    const downloadReadme = () => {
      if (!markdownInput.value) return;

      const element = document.createElement('a');
      const file = new Blob([markdownInput.value], { type: 'text/plain' });

      element.href = URL.createObjectURL(file);
      element.download = 'README.md';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    return {
      markdownInput,
      parsedMarkdown,
      downloadReadme,
    };
  }
};
</script>
<template>
  <div class="readme-page">
    <div class="tab-container">
      <div>
        <div class="title-container">
          <button class="btn-back" @click="$router.back()">
            <MdArrowBackIos />
          </button>
          <h1 class="title">Github Util</h1>
        </div>
        <p class="subtitle">README Editor</p>
      </div>

      <div class="form-fields">
        <div class="form-group">
          <label for="markdownInput">Markdown Content</label>
          <textarea id="markdownInput" v-model="markdownInput" :placeholder="'Write your README.md content here...'"
            class="monospace-textarea"></textarea>
        </div>
      </div>
    </div>

    <div class="readme-content">
      <div class="readme-toolbar">
        <p className="label">Preview</p>
        <button @click="downloadReadme" class="btn-download">
          <MdDownload />
          <p>Download</p>
        </button>
      </div>

      <div class="readme-preview" v-html="parsedMarkdown"></div>
    </div>
  </div>
</template>