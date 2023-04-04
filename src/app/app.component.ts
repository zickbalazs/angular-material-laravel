import { Component, OnInit } from '@angular/core';
import { Power } from './power';
import { PowerService } from './power.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-material';
  consumptions: Power[] = [];
  newItem(data:Power){
    this.consumptions = [...this.consumptions, data];
  }
  ngOnInit(): void {
    this.getItems();
  }
  getItems(){
    this.http.GetAll().subscribe(data=>this.consumptions = data);
  }
  constructor(private http:PowerService){}
}

