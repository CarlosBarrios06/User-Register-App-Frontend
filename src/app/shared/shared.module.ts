import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list' ;
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule, 
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    NgxPaginationModule
  ],
  exports:[
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatSelectModule,
    MatListModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    NgxPaginationModule
    
  ]
})
export class SharedModule { }
