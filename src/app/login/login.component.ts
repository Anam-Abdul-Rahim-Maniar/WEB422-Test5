import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {
    userName: "",
    password: ""
  };
  message = "";

  constructor(private route:Router) { }

  onSubmit(){
    if(this.user.password !== "" && this.user.userName !== ""){
      const pattern = /[^A-Za-z0-9]+/;
      if(!pattern.test(this.user.password) && !pattern.test(this.user.userName)){
        if(this.user.password === "myPassword" && this.user.userName === "bob"){
          this.message = "";
        this.route.navigate(['/contactus']);
        }
        else{
          this.message = "unregistered user";
        }
      }
      else{
        this.message = "password and username must contain only numbers and letters";
      }
    }
    else{
      this.message = "password and username cannot be empty";
    }
  }

  ngOnInit(): void {
  }

}

//https://62edc2b9ba5a2260ce3c3523--illustrious-taffy-10d9a2.netlify.app/