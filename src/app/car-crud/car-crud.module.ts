import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarCrudRoutingModule } from './car-crud-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DetailsComponent} from "../car/details/details.component";
import {CreateComponent} from "../car/create/create.component";
import {UpdateComponent} from "../car/update/update.component";


@NgModule({
  declarations: [
    DetailsComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    CarCrudRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarCrudModule { }
