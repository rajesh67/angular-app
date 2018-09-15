import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CategoryService } from "../category.service";
import { Category } from "../category";
import { StoreService } from "../store.service";
import { Store } from "../store";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})

export class CategoryDetailsComponent implements OnInit {
  public category : Category;
  public stores : Store[];

  constructor(private route : ActivatedRoute, private catService: CategoryService, private storeService : StoreService) { }

  ngOnInit() {
    this.getCategory();
    this.getStores();
  }

  getCategory():void{
    const catId=+this.route.snapshot.paramMap.get('id');
    this.catService.getCategoryById(catId)
                    .subscribe((data:Category)=>{
                      this.category=data;
                    });
  }

  getStores():void{
    this.storeService.getAllStores()
                      .subscribe((data:Store[])=>{
                        this.stores=data;
                      });
  }

}
