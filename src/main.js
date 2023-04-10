import Vue from 'vue'; import mavonEditor from 'mavon-editor'; import
'mavon-editor/dist/css/index.css'; import App from './App.vue'; Vue.config.productionTip = false;
Vue.use(mavonEditor); new Vue({ render: h => h(App), }).$mount('#app');
