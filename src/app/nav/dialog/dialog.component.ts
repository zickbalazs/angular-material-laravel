import { Component } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent {
  formdata = {
    day: new FormControl('', [Validators.required]),
    production: new FormControl(''),
    powerunit: new FormControl('')
  }
  
  
  constructor(public dialog:MatDialogRef<DialogComponent>){}


  Upload(){
    console.log(this.formdata.day.value, this.formdata.powerunit, this.formdata.production);
  }


}
