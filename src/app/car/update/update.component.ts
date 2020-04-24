import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  car: Car;

  constructor(private route: ActivatedRoute,private router: Router,
              private carService: CarService) { }

  ngOnInit() {
    this.car = new Car();

    this.id = this.route.snapshot.params['id'];

    this.carService.getById(this.id)
      .subscribe(data => {
        console.log(data)
        this.car = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.carService.update(this.id, this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  gotoList() {
    this.router.navigate(['/car/home']);
  }
}
