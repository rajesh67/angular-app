import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../category.service";
import { ConfigService } from "../config.service";
import { Config } from "../config";
import { Category } from "../category";
import { Offer } from "../offer";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private config:Config;
  private error : any;
  public categories : Category[];

  private categoriesUrl="http://localhost:8000/api/categories/";

  constructor(private catService : CategoryService, private configService : ConfigService) { }

  ngOnInit() {
    this.getCategories();
    console.log(this.categories);
  }

  getConfig(){
    this.configService.getConfig()
                    .subscribe((data:Config)=>this.config={
                        categoriesUrl:data['categoriesUrl']
                      },//success path
                    this.error=this.error//error path
                  );
  }

  getCategories():any{
    this.catService.getCategories()
                    .subscribe((data:Category[])=>{
                      this.categories=data;
                    });
  }
}
