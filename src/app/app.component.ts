import { Component,OnInit } from '@angular/core';
import {CurrentscreenService} from './currentscreen.service';
import {translateRight,navAnimation,footerAnimation,routeAnimate} from './app-animations';
import { RouterOutlet,ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    translateRight,
    navAnimation,
    footerAnimation,
    routeAnimate
  ]
})
export class AppComponent implements OnInit {
  title = 'coordiportal';
  smallWidth=false;
  stateRegister='show';
  footer=true;
  constructor(private cs : CurrentscreenService,
              private route : ActivatedRoute,
              private router:Router,
              private ngxService: NgxUiLoaderService){}
  ngOnInit(){
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
  	setInterval(()=>{this.changeOrder()});
  }


  changeOrder(){	
  	(window.innerWidth<992)?this.smallWidth=true:this.smallWidth=false;
    if(window.location.href.includes('managerdetail') || window.location.href.includes('memories') )
      this.footer=false;

    if(window.location.href.includes('memories')){
      let navlinks = document.querySelectorAll('.nav-link');
      navlinks.forEach(function(item){
        item.classList.remove('active');
      });
      document.querySelector('#memories').classList.add('active');
    }

    if(window.location.href.includes('department')){
      let navlinks = document.querySelectorAll('.nav-link');
      navlinks.forEach(function(item){
        item.classList.remove('active');
      });
      document.querySelector('#departments').classList.add('active');
    }

  }

  changeScreen(event,name){
  	console.log(name);
  	this.cs.setCurrentScreen(name);
    this.router.navigate([''])
    let navlinks = document.querySelectorAll('.nav-link');
    navlinks.forEach(function(item){
      item.classList.remove('active');
    });
    event.target.classList.add('active');
  }

  toggleTrigger(){
    this.stateRegister=='hide'?this.stateRegister='show':this.stateRegister='hide';
  }

  log(e){
    console.log(e);
  }

  prepareRoute(outlet: RouterOutlet) {
    // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'])
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  redirect(path){
    this.router.navigate([path]);
  }
}
