import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Power } from 'src/app/power';
import { PowerService } from 'src/app/power.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent {
  form = {
    day: new FormControl(''),
    production: new FormControl(''),
    powerunit: new FormControl('')
  }
  @Output() mod = new EventEmitter<Power>();
  constructor(
    private dialogref: MatDialogRef<EditComponent>,
    private http: PowerService,
    @Inject(MAT_DIALOG_DATA) public data: Power
  ){}
  
  Modify(){
    this.http.Put(
      {
        id: this.data.id,
        day: this.form.day.value as string,
        powerunit: this.form.powerunit.value as string,
        production: Number(this.form.production.value)
      }
    ).subscribe(data=>{
      this.mod.emit(data as Power);
    })
  }
}
