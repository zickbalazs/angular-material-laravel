import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Power } from 'src/app/power';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent {
  @Input() consumptions: Power[] = [];
  public columns = [...Object.keys({id:-1, day: "", powerunit: "", production: 0} as Power), "operations"];
  constructor(private dialog: MatDialog){}
  
  openEdit(celldata:Power){
    let dialog = this.dialog.open(EditComponent, {data: celldata});
    dialog.componentInstance.mod.subscribe(data=>{
      let indexes = this.consumptions.map(e=>e.id);
      this.consumptions[indexes.indexOf(indexes.find(e=>e==data.id) as number)] = data;
      this.consumptions = [...this.consumptions];
    })
  }
  openDelete(celldata:Power){
    let dialog = this.dialog.open(DeleteComponent, {data: celldata});
    dialog.componentInstance.deletion.subscribe((data)=>{
      let indexes = this.consumptions.map(e=>e.id);
      if (indexes.find(e=>e==data)){
        this.consumptions.splice(indexes.indexOf(indexes.find(e=>e==data) as number), 1);
        this.consumptions = [...this.consumptions];
      }
    })
  }
}
