import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number=0
  
  fun1(){
    this.count=this.count+1
  }
  fun2(){
    this.count=this.count-1
  }
  fun3(){
    this.count=0
  }
}
