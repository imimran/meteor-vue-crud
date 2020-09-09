<template>
  <div>
    <br>
    <b-container fluid="sm" >
    <form @submit.prevent="assignSubject">
      <label>Student ID: </label>
       <b-form-input
        className="form-control"
        type="text"
        name="studentId"
        id="subject.sName">
       </b-form-input>
      <br />
      <label>Subject Name: </label>
       <b-form-select className="form-control">
        <option name="subjectName" value="option-1">Bangla</option>
        <option name="subjectName" value="option-2">English</option>
        <option name="subjectName" value="option-3">Math</option>
        <option name="subjectName" value="option-4">Physics</option>
      </b-form-select>
      <br>
       <button class="btn btn-primary"> Save </button>
    </form>
    </b-container>
  </div>
</template>

<script>
//import { AssignSubjects } from '../../api/AssignSubjects'
export default {
  data() {
    return {
      studentId: "",
      subjectName: "",
    };
  },

  methods: {
    assignSubject() {
      Meteor.call("assignSubject", this.assignSubject, function (
        error,
        result
      ) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      });
      //   this.assignSubject = ""
    },
  },
  meteor: {
    assignSubject() {
      return Assignubjects.find({}).fetch();
    },
  },
};
</script>

<style></style>
