import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CarService} from "../../service/car.service";
import {Car} from "../../model/car";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  car : Car =new Car()
  submitted = false;

  ngOnInit() {

  }
  newcar(): void {
    this.submitted = false;
    this.car = new Car();
  }

  constructor(
    private router: Router,
    public carService: CarService
  ){ }
  save() {
    this.carService.create(this.car).subscribe(res => {
      console.log(res)
    } );
 this.car = new Car();
 this.gotolist();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  private gotolist() {
    this.router.navigateByUrl('car/home')

  }
}
