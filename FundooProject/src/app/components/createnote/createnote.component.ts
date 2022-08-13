import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  createnoteform!:FormGroup;
  submitted = false;
  isshow=false;
  isPin = false;
  isArchive = false;
  isTrash = false;
  isColor = "white";
  isImage = "image";

  constructor(private formBuilder: FormBuilder,private noteService:NoteService,private snackBar:MatSnackBar) { 
    
  }

  ngOnInit(): void {
    this.createnoteform = this.formBuilder.group({
      title: [''],
      body: [''],
    });
  }

  createNote()
  {
    this.isshow=false;
    if(this.createnoteform.valid)
    {
    console.log(this.createnoteform.value);
    let reqData={
      title:this.createnoteform.value.title,
      note:this.createnoteform.value.body,
      color:this.createnoteform.value.isColor,
      image:this.createnoteform.value.isImage,
      isArchive:this.createnoteform.value.isArchive,
      isPin:this.createnoteform.value.isPin,
      isTrash:this.createnoteform.value.isTrash
    }
    this.noteService.createNoteService(reqData).subscribe((Response:any)=>{
      console.log(Response);
      this.snackBar.open('Note Creation successful.','',{duration:2000,});
    },
    (error:any)=>{
      console.log(error);
    }
    )
  }
  else
  {
    this.isshow=false;
  }
    // this.noteerviceService.createNoteservice(reqData).subscribe((response:any)=>{
    //   console.log(response);
    //   localStorage.setItem("token",response.data)
    // },(error:any)=>{
    //   console.log(error);
    // })
  }
  display()
  {
    this.isshow=true;
  }
  ispin()
  {
    this.isPin=true;
  }

}
