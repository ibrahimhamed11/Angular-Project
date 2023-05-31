import { FoodpageComponent } from './../foodpage/foodpage.component';
import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
@Input()
FoodpageTags?:string[]
  tags?:Tag[];
constructor(private FoodService:FoodService){

}

  ngOnInit(): void {

    if(!this.FoodpageTags)
    this.tags=this.FoodService.getAllTags();
  }

}
