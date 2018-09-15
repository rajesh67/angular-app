import { Component, OnInit } from '@angular/core';
import { Store } from "../store";
import { Offer } from "../offer";
import { StoreService } from "../store.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {
  public store : Store=null;

  constructor(private route : ActivatedRoute, private storeService : StoreService) { }

  ngOnInit() {
    this.getStore();
  }

  getStore(){
    const id= +this.route.snapshot.paramMap.get('id');
    this.storeService.getStoreById(id)
                      .subscribe((data:Store)=>{
                        this.store=data;
                      });
  }

}
