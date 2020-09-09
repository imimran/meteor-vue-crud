<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DateOfBirth</th>
              <th scope="col">Subjects</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student._id">
              <td scope="row">{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>{{ student.dateOfBirth }}</td>
              <td>{{}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-md-2"></div>
      <div class="col-md-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Subject Name</th>
              <th scope="col">Student List</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subject in subjects" :key="subject._id">
              <th scope="row">{{ subject.name }}</th>
              <td>{{ subject.sName }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import AddStudents from "./AddStudent";
import AddSubjects from "./AddSubject";
import { Students, Subjects } from "../../api/students";

import "bootstrap/dist/css/bootstrap.min.css";

export default {
  methods: {},
  meteor: {
    $subscribe: {
      students: [],
      subjects: [],
    },

    students() {
      console.log(Students.find({}).fetch());
      return Students.find({}).fetch();
    },
    subjects() {
      return Subjects.find({}).fetch();
    },
  },
};
</script>

<style></style>
