import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';
import {Tag}from '../shared/models/Tag'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;



  }
  getAll():Food[]{

    return sample_foods;

  }


  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }


  getAllTags():Tag[] {

    return[
    {name:"All",count:14},
    {name:"FastFood",count:4},
    {name:"Pizaa",count:2},
    {name:"SlowFood",count:2},
    {name:"Hamburger",count:1},

    ];

      }

  getAllFoodsByTag(tag:string):Food[]{
return tag=='All'?
this.getAll():
this.getAll().filter(food=>food.tags?.includes(tag));



  }


}
