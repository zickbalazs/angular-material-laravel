import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PowerService } from 'src/app/power.service';
import { Output, EventEmitter } from '@angular/core';
import { Power } from 'src/app/power';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})

export class DialogComponent {
  formdata = {
    day: new FormControl('', [Validators.required]),
    production: new FormControl('', [Validators.required, Validators.min(0)]),
    powerunit: new FormControl('', [Validators.required])
  }
  @Output() upload = new EventEmitter<Power>();
  
  constructor(public dialog:MatDialogRef<DialogComponent>, private snackbar:MatSnackBar, private service: PowerService){}


  Upload(){
    if (this.formdata.day.valid && this.formdata.production.valid && this.formdata.powerunit.valid){
      this.service.Post({
        day: this.formdata.day.value as string,
        powerunit: this.formdata.powerunit.value as string,
        production: Number(this.formdata.production.value)
      }).subscribe(data=>{
        this.snackbar.open("Successful upload!", "OK");
        this.dialog.close();
        this.upload.emit({
          day: data.day,
          id: data.id,
          powerunit: data.powerunit,
          production: data.production
        });
      })
    }
    else {
      this.snackbar.open("You didn't fill out the form", "OK", {
        duration: 2500,
      });
    }
  }


}
