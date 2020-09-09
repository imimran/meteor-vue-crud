import { Meteor } from "meteor/meteor";
import Vue from "vue";
import router from '../router/routes'
import BootstrapVue from 'bootstrap-vue'

import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker)
Vue.use(BootstrapVue)

import App from "../imports/ui/App.vue";

Meteor.startup(() => {
  new Vue({
    router,
    el: "#app",
    ...App,
  });
});
