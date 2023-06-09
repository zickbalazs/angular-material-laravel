import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { CreateComponent } from './nav/create/create.component';
import { DialogComponent } from './nav/dialog/dialog.component';
import { TableComponent } from './main/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './main/edit/edit.component';
import { DeleteComponent } from './main/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CreateComponent,
    DialogComponent,
    TableComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatSliderModule,
    MatDatepickerModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
