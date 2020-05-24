import { Component, OnInit } from '@angular/core';
import { RouterOutlet,ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  mobile=false;
  constructor(private route : ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
  	setInterval(()=>this.intervalFn());
  }


  intervalFn(){
  	if(window.innerWidth<675)
  		this.mobile=true;
  	else
  		this.mobile=false;
  }

  redirect(path){
    this.router.navigate([path]);
  }

}
