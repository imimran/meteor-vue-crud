<template>
  <div><b-container fluid="sm" >

    <div>Add Student</div>

    <br>

    <form @submit.prevent="saveNewStudent">
      <label >Name</label>
      <b-form-input
        type="text"
        name="student.name"
        id="student.name"
        v-model="student.name" >
      </b-form-input>
      
       <br>
      <label>Email</label>
      <b-form-input
        type="text"
        name="student.email"
        id="student.email"
        v-model="student.email">
      </b-form-input>
      <br>
      <label>Phone</label>
     <b-form-input
        type="number"
        name="student.phone"
        id="student.phone"
        v-model="student.phone">
      </b-form-input>
      <br>
      <label >Date of Birth</label>
      <b-form-input
        type="text"
        name="student.dateOfBirth"
        id="student.dateOfBirth"
        v-model="student.dateOfBirth">
     </b-form-input>
      <br>
       <button class="btn btn-primary"> Save </button>
    </form>
   </b-container>
  </div>
</template>

<script>
import {Meteor} from "meteor/meteor"
import { Students } from '../../api/students'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  data(){
    return{
      student:{
        name: '',
        email:'',
        phone:'',
        dateOfBirth:''
      }
    }
  },
  methods: {
    saveNewStudent(){
      Meteor.call("createStudent", this.student, function(error, result){
        if(error){
          console.log(error)
        } else {
          console.log(result)
        }
      })
      this.student = ""
    } 
  },
  meteor:{
    students(){
      return Students.find({}).fetch()
    }
  }
};
</script>

<style></style>
