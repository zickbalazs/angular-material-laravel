import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Power } from 'src/app/power';
import { PowerService } from 'src/app/power.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.sass']
})
export class DeleteComponent {
  @Output() deletion = new EventEmitter<number>();
  constructor(private snackbar:MatSnackBar, private service:PowerService, private dialogref: MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: Power){
  }
  Delete(){
    this.service.Delete(this.data.id).subscribe(()=>{
      this.deletion.emit(this.data.id);
      this.snackbar.open("Successful deletion!", "OK");
      this.dialogref.close();
    });
  }

}
