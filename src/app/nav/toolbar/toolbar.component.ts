import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Power } from 'src/app/power';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {
  constructor(public Dialog:MatDialog){}
  @Output() upload = new EventEmitter<Power>();  
  
  openDialog(){
    let dialog = this.Dialog.open(DialogComponent);
    dialog.componentInstance.upload.subscribe((data)=>{
      this.upload.emit(data);
    })
  }
}
