import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  mobile=false;
  constructor() { }

  ngOnInit(): void {
  	setInterval(()=>this.intervalFn());
  }


  intervalFn(){
  	if(window.innerWidth<675)
  		this.mobile=true;
  	else
  		this.mobile=false;
  }

}
