import { Component, OnInit } from '@angular/core';
import {Car} from "../../model/car";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['car/home']);
  }
}
