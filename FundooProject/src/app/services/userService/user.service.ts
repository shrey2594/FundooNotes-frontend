import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:any
  constructor(private httpService:HttpService) { }

loginUserService(reqData: any){
  console.log(reqData);
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': this.token
    })
    
    }
   return this.httpService.postService('User/Login',reqData,false,httpOptions);
}

registerUserService(reqData:any){
  console.log(reqData);
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': this.token
    })
    
    }
   return this.httpService.postService('User/Add',reqData,false,httpOptions);
}

forgetUserService(reqData:any,email:string){
  console.log(reqData);
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': this.token
    })
    
    }
   return this.httpService.postService('User/ForgetPassword?email='+email,reqData,false,httpOptions);
}

resetUserService(reqData:any){
  console.log(reqData);
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': this.token
    })
    
    }
   return this.httpService.postService('User/ResetPassword',reqData,false,httpOptions);
}
 
  
}

