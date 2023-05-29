import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup
  submitted = false
  loginFormData = {
    email: "",
    password: ""
  }
  userEmail = "rahul.singh@saamaja.com"
  userPass = "rahul@12345"
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })
  }
  get form() {return this.loginForm.controls}
  onSubmit(ev){
    if(ev.submitter.name == "submit"){
      this.loginDetails()
    }
  }
  loginDetails(){
    this.submitted = true
    if(this.loginForm.invalid){
      return
    }
    this.loginFormData.email = this.loginForm.value.email
    this.loginFormData.password = this.loginForm.value.pass
    console.log(this.loginFormData)
    this.dataService.post(this.loginFormData);
    // if(this.loginFormData.email == this.userEmail && this.loginFormData.password == this.userPass){
    // }
  }
}
