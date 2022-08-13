import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }
  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.pattern("")]],
      confirmPassword: ['', [Validators.required, Validators.pattern("")]],
    });
  }
  Reset()
  {
      console.log(this.resetForm.value);
      if(this.resetForm.valid)
      {
        let reqData = {
          email:this.resetForm.value.email,
          password:this.resetForm.value.password
        }
        this.userService.resetUserService(reqData).subscribe((response:any)=>{
          console.log(response);
        },(error:any)=>{
          console.log(error);
        })
      }
  }
}
