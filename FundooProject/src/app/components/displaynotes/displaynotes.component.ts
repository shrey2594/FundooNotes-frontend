import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  title: any;
  body: any;
  isImage:any
  isColor:any;
  isArchive:any
  isTrash:any
  isPin:any
  @Input() noteList:any
  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.noteList);
  }



}
