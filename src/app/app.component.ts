import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  num : number;
  id: NodeJS.Timeout;

  ngOnInit() {
    this.id = setInterval(() => {this.battleInit();}, 1000);
  }
  battleInit() {
    this.num = Math.round((((Math.random() * 100) / 10)));
    console.log(this.num);
  }
  
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
