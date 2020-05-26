import { Component,OnInit } from '@angular/core';
import {CurrentscreenService} from './currentscreen.service';
import {translateRight,navAnimation,footerAnimation,routeAnimate} from './app-animations';
import { RouterOutlet,ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {CommunicatorService} from './services/communicator.service';

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
  mobile=false;
  overflowHidden=true;
  showx = false;
  isSafari=false;
  bodyMobile=true;
  constructor(private cs : CurrentscreenService,
              private route : ActivatedRoute,
              private router:Router,
              private ngxService: NgxUiLoaderService,
              private commService:CommunicatorService){}
  ngOnInit(){
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
  	setInterval(()=>{this.changeOrder()});
    if(this.getMobileOperatingSystem()=="iOS"){
        this.bodyMobile=false;
    }
  }


  changeOrder(){	
  	(window.innerWidth<992)?this.smallWidth=true:this.smallWidth=false;
    if(window.location.href.includes('managerdetail') )
      this.footer=false;
    else
      this.footer=true;

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

    if(window.innerWidth<675)
      this.mobile=true;
    else
      this.mobile=false;

    if(window.innerWidth>1070){
      this.overflowHidden=true;
    }
    else{
       this.overflowHidden=false;
    }

    var is_safari = navigator.userAgent.indexOf("Safari")
    if(is_safari==104 && this.mobile==false){
      this.isSafari=true;
    }
    else
      this.isSafari=false;
    // console.log(is_safari);

  }

  changeScreen(event,name){
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

  redirectAnotherPage(link){
    // window.location.href=link;
    window.open(link);
  }

  routeAnimationComplete(e){
    this.commService.statusReceiver(e);
  }

  showCross(){
    this.showx?this.showx=false:this.showx=true;
  }

  getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;

        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          return "Windows Phone";
      }

      if (/android/i.test(userAgent)) {
          return "Android";
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return "iOS";
      }

      return "unknown";
  }
}
