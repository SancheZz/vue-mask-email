import MaskEmail from './MaskEmail.vue';
import { type App } from 'vue';

export default {
  install(app: App) {
    app.component('MaskEmail', MaskEmail);
  },
};
