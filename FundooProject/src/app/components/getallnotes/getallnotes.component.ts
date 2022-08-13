import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  noteList=[];
  submitted = false;
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes()
  {
    console.log("sFJHKf");
    this.noteService.getAllNoteService().subscribe((Response:any)=>{
      console.log(Response);
      this.noteList=Response.data;
    },
    (error:any)=>{
      console.log(error);
    }
    )
    
  }

}
