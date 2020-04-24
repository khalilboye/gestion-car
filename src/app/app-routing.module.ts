import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from "./car/car.component";
import {HomeComponent} from "./car/home/home.component";
import {CreateComponent} from "./car/create/create.component";
import {UpdateComponent} from "./car/update/update.component";
import {DetailsComponent} from "./car/details/details.component";


const routes: Routes = [

  { path: 'car', component: CarComponent},
  { path: 'car', redirectTo: 'car/home', pathMatch: 'full'},
  { path: 'car/home', component: HomeComponent },
  { path: 'car/create', component: CreateComponent },
  { path: 'car/update/:id', component: UpdateComponent },
  { path: 'car/details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
