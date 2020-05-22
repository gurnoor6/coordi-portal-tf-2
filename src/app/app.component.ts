import { Component,OnInit } from '@angular/core';
import {CurrentscreenService} from './currentscreen.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coordiportal';
  smallWidth=false;
  constructor(private cs : CurrentscreenService){}
  ngOnInit(){
  	setInterval(()=>{this.changeOrder()});
  }


  changeOrder(){	
  	(window.innerWidth<992)?this.smallWidth=true:this.smallWidth=false;
  }

  changeScreen(name){
  	console.log(name);
  	this.cs.setCurrentScreen(name);
  }

}
