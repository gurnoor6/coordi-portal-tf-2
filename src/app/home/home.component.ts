import { Component, OnInit,AfterViewInit } from '@angular/core';
import {CurrentscreenService} from '../currentscreen.service';
import {fade,slide,animateHead,animateContent} from './home-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
  	fade,
  	slide,
    animateHead,
    animateContent
  ]
})
export class HomeComponent implements OnInit,AfterViewInit {
  screen='home';
  constructor(private cs:CurrentscreenService) { }

  ngOnInit(): void {
  	setInterval(()=>{this.setScreen()});
  }

  ngAfterViewInit(){
    let p = document.querySelector('.text1class');
    p.classList.add('text1');
    console.log(p)
    p.addEventListener('animationend',function(){
      p.classList.remove('text1');
      document.querySelector('.text2class').classList.add('text2');
    })

    let p2 = document.querySelector('.text2class');
    p2.addEventListener('animationend',function(){
      p2.classList.remove('text2');
      document.querySelector('.text3class').classList.add('text3');
    })

    let p3 = document.querySelector('.text3class');
    p3.addEventListener('animationend',function(){
      p3.classList.remove('text3');
      document.querySelector('.text1class').classList.add('text1');
    })


  }

  setScreen(){
  	this.screen = this.cs.getCurrentScreen();
  }



}
