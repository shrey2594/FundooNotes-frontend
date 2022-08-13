import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any
  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem("token");
  }

  createNoteService(reqData:any)
  {
    console.log(reqData);
  let httpOptions = {
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + this.token
    })
    
    }
   return this.httpService.postService('Note/NoteAdd',reqData,true,httpOptions);
  }


  getAllNoteService()
  {
    let httpOptions = {
      headers:new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Note/GetAllNotes',true,httpOptions);
  }
}
