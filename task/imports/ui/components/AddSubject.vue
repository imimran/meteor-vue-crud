<template>
  <div><b-container fluid="sm" >

    <div>Add Subject</div>
    <br>

    <form @submit.prevent="saveNewSubject">
      <label >SubjectName</label>
    
    <b-form-input
        type="text"
        name="subject.name"
        id="subject.name"
        v-model="subject.name" >
     </b-form-input>
       <br>
      <label>Student</label>
        <b-form-input
        type="text"
        name="subject.sName"
        id="subject.sName"
        v-model="subject.sName" >
      </b-form-input>
      <br>
      <button class="btn btn-primary"> Save </button>
    </form>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import { Subjects } from '../../api/students'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  data(){
    return{
      subject:{
        name: '',
        sName:''
       
      }
    }
  },
  methods: {
    saveNewSubject(){
      Meteor.call("createSubject", this.subject, function(error, result){
        if(error){
          console.log(error)
        } else {
          console.log(result)
        }
      })
      this.subject = ""
    } 
  },
  meteor:{

    subjects(){
      return Subjects.find({}).fetch()
    }
  }
};
</script>

<style></style>
