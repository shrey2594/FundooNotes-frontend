import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.pattern("")]],
      confirmPassword: ['', [Validators.required, Validators.pattern("")]]
    });
  }
  signup()
  {
    console.log(this.signupForm.value);
    if(this.signupForm.valid)
    {
      let reqData = {
        firstName:this.signupForm.value.firstName,
        lastName:this.signupForm.value.lastName,
        email:this.signupForm.value.userName,
        password:this.signupForm.value.password
      }
      this.userService.registerUserService(reqData).subscribe((response:any)=>{
        console.log(response);
      },(error:any)=>{
        console.log(error);
      })
    }
           
}
  }

