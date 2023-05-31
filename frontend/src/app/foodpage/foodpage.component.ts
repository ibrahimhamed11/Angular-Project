
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:Food;
  constructor(private ActivatedRoute:ActivatedRoute,private FoodService:FoodService){

    ActivatedRoute.params.subscribe((params)=>{
if(params.id)
this.food=FoodService.getFoodById(params.id)
    })
  }

}
