import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  title = 'socialgrants';
  
  images = [1, 2, 3].map(() => `https://picsum.photos/2048/800?random&t=${Math.random()}`);



}
