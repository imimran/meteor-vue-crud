<template>
  <div>
    <br />

    <b-card-header header-tag="nav">
      <b-nav card-header pills>
        <b-nav-item> <router-link to="/home">Home</router-link> </b-nav-item>
        <b-nav-item
          ><router-link to="/add-student">Add Student</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/add-subject">Add Subject</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/assign-subject">Assign Subject</router-link>
        </b-nav-item>
      </b-nav>
    </b-card-header>
    <br />
    <div>
      <router-view></router-view>
    </div>

    <br />
  </div>
</template>

<script>
import Vue from "vue";
import Home from "./components/Home";
export default {
  components: {
    Home,
  },
  methods: {},
};
</script>

<style></style>
