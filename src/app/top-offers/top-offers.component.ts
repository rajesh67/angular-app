import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-offers',
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.css']
})
export class TopOffersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  images = [1, 2, 3].map(() => `https://picsum.photos/2048/300?random&t=${Math.random()}`);

}
