import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      newComment: '',
      comments: []
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment.trim());
        this.newComment = '';
      }
    }
  }
}).mount('#app');
