import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


  contactUser = {
    fullName: "",
    email: "",
    message: ""
  }
  message="";

  constructor() { }

  onSubmit(){
    if(this.contactUser.email === "" || this.contactUser.fullName === "" || this.contactUser.message === ""){
      this.message = "Please fill in the email, name and message";
    }
    else{
      this.message = "Success";
    }
  }

  ngOnInit(): void {
  }

}
