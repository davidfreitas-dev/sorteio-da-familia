import filters from '@/filters';

export default {
  install(app) {
    app.config.globalProperties.$filters = filters;
  }
};
