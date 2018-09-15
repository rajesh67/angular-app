import { Component, OnInit } from '@angular/core';
import { Category } from "../category";
import { CategoryService } from "../category.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  
  public categories : Category[];

  constructor(private catService : CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.catService.getCategories()
                    .subscribe((data:Category[])=>{
                      this.categories=data;
                    });
  }

}
