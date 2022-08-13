import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private userService:UserService,private router:Router,private snackBar:MatSnackBar) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("")]],
    });
    
  }
  // ^(?=.*\d).{8,}$
  login()
  {
      console.log(this.loginForm.value);
      if(this.loginForm.valid)
      {
        // console.log("hjsgfj");
        let reqData = {
          email:this.loginForm.value.email,
          password:this.loginForm.value.password
        }
        this.userService.loginUserService(reqData).subscribe((response:any)=>{
          console.log(response);
          localStorage.setItem("token",response.data)
          this.router.navigateByUrl("/notedashboard/getallnotes")
          this.snackBar.open("Login successful",'',{duration:2000})

        },(error:any)=>{
          console.log(error);
          this.snackBar.open("Unauthorized access",'',{duration:2000})
        })
      }
      else
      {
        return;
      }
             
  }

  showpass()
  {
    
  }
}
