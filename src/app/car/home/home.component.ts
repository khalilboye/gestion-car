import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CarService} from "../../service/car.service";
import {Router} from "@angular/router";
import {Car} from "../../model/car";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];

  constructor(public carService: CarService, private router: Router) { }

  ngOnInit() {
this.reloadData();
  }
  reloadData() {

    this.carService.getAll().subscribe((data: Car[])=>{
      console.log(data);
      this.cars = data;
    })  }

  deleteCar(id: number) {
    this.carService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
 carDetails(id: number){
    this.router.navigate(['car/details', id]);
  }

  updateDetails(id: number) {
    this.router.navigate(['car/update', id]);
  }
}
