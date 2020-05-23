import { Component,OnInit } from '@angular/core';
import {CurrentscreenService} from './currentscreen.service';
import {translateRight,navAnimation,footerAnimation} from './app-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    translateRight,
    navAnimation,
    footerAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'coordiportal';
  smallWidth=false;
  stateRegister='show';
  footer=true;
  constructor(private cs : CurrentscreenService){}
  ngOnInit(){
  	setInterval(()=>{this.changeOrder()});
  }


  changeOrder(){	
  	(window.innerWidth<992)?this.smallWidth=true:this.smallWidth=false;
    if(window.location.href.includes('managerdetail') || window.location.href.includes('memories') )
      this.footer=false;
  }

  changeScreen(name){
  	console.log(name);
  	this.cs.setCurrentScreen(name);
  }

  toggleTrigger(){
    this.stateRegister=='hide'?this.stateRegister='show':this.stateRegister='hide';
  }

  log(e){
    console.log(e);
  }

}
