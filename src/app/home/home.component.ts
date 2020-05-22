import { Component, OnInit } from '@angular/core';
import {CurrentscreenService} from '../currentscreen.service';
import {fade,slide} from './home-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
  	fade,
  	slide
  ]
})
export class HomeComponent implements OnInit {
  screen='home';
  constructor(private cs:CurrentscreenService) { }

  ngOnInit(): void {
  	setInterval(()=>{this.setScreen()});
  }

  setScreen(){
  	this.screen = this.cs.getCurrentScreen();
  }

}
