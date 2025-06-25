<template>
  <div class="quill-text-editor">
    <div ref="editor" class="quill-editor"></div>
  </div>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './QuillTextEditor.scss'

export default {
  name: 'QuillTextEditor',
  props: {
    placeholder: {
      type: String,
      default: 'Start typing...'
    },
    theme: {
      type: String,
      default: 'snow'
    },
    modules: {
      type: Object,
      default: () => ({})
    },
    formats: {
      type: Array,
      default: () => []
    },
    toolbar: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    const options = {
      theme: this.theme,
      modules: this.modules,
      formats: this.formats,
      placeholder: this.placeholder
    };
    
    if (!this.toolbar) {
      options.modules.toolbar = false;
    }

    this.quill = new Quill(this.$refs.editor, options);
  }
}
</script>