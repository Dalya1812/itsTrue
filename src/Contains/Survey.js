import React, {Component} from "react";
import App from "../App";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
var uuid = require('uuid');

const firebaseConfig = {
  apiKey: "AIzaSyAvqFmrNUsng2JjSVTeaWyhtVCSac8Q-y8",
  authDomain: "istrue-385c9.firebaseapp.com",
  databaseURL: "https://istrue-385c9-default-rtdb.firebaseio.com",
  projectId: "istrue-385c9",
  storageBucket: "istrue-385c9.appspot.com",
  messagingSenderId: "733176437823",
  appId: "1:733176437823:web:a4ef5616116797522cec8a",
  measurementId: "G-YCTW4WNSJ0"
};


class Survey extends Component{
    constructor(props){
    super(props);
    this.state={
        uid:uuid.v1(),
        name:'',
        answers:{
        ans1:'',
        ans2:'',
  
        },
    isSubmitted: false

    }
}


render(){
var name='';
var questions='';
name = <div>
</div>

return (
 <div>
    {name}
    {questions}
 </div>
 );
} 
}
export default Survey;
