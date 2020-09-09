import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../imports/ui/components/Home.vue";
import AddStudent from "../imports/ui/components/AddStudent.vue";
import AddSubject from "../imports/ui/components/AddSubject.vue";
import AssignSubject from "../imports/ui/components/AssignSub.vue";


const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-student",
    name: "AddStudent",
    component: AddStudent,
  },
  {
    path: "/add-subject",
    name: "AddStudent",
    component: AddSubject,
  },
  {
    path: "/assign-subject",
    name: "AssignStudent",
    component: AssignSubject,
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
