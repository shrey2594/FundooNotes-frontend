import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }
  ngOnInit(): void {
    this.forgetForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]]
      // newPassword: ['', [Validators.required, Validators.minLength(8)]],
      // confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  Forget()
  {
      console.log(this.forgetForm.value);
      if(this.forgetForm.valid)
      {
        let reqData = {
          email:this.forgetForm.value.email,
          //password:this.forgetForm.value.password
        }
        this.userService.forgetUserService(reqData,this.forgetForm.value.email).subscribe((response:any)=>{
          console.log(response);
        },(error:any)=>{
          console.log(error);
        })
      }
  }
}
