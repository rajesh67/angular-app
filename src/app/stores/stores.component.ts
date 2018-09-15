import { Component, OnInit } from '@angular/core';
import { Store } from "../store";
import { StoreService } from "../store.service";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  public stores : Store[];
  public page=1;

  constructor(private storeService : StoreService) { }

  ngOnInit() {
    this.getStores();
  }

  getStores(){
    this.storeService.getAllStores()
                      .subscribe((data:Store[])=>{
                        this.stores=data;
                      });
  }

}
