import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';


export const Students = new Mongo.Collection('students')
export const Subjects = new Mongo.Collection('subjects')

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('students', function studentsPublication() {
        return Students.find();
    })
}


if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('subjects', function subjectsPublication() {
        return Subjects.find();
    });
}


Meteor.methods({
    createStudent(student){
        return Students.insert(student)
    }
})


Meteor.methods({
    createSubject(subject){
        return Subjects.insert(subject)
    }
})

