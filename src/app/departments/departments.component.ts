
import { Component, ViewChild,OnInit } from '@angular/core';
import Glide from '@glidejs/glide';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
 	mobile=false;
  constructor(private route: ActivatedRoute,private router: Router) { }
  ngOnInit(): void {
  	const config = {
  		perView:3,
  		gap:64,
  		bound: true,
  		breakpoints:{
  			675: {
		    perView: 1
		  }
  		}

  	}
  	    new Glide('.glide',config).mount();

  	setInterval(()=>this.intervalFunction());

  }


  zoomIn(event){
  	// console.log(event)
  	let element_description = event['path'][2].children[2];
  	let element_num = event['path'][2].children[1];
  	element_description.classList.add('text-name-hover');

  	let element_text = event['path'][2].children[2].children[0];
  	element_text.classList.add('lower-text-hover');

  }

  
  zoomOut(event){
  	let element_description = event['path'][2].children[2];
  	let element_num = event['path'][2].children[1];
  	element_description.classList.remove('text-name-hover');
  	element_num.classList.remove('border-white');
  	
  	let element_text = event['path'][2].children[2].children[0];
  	element_text.classList.remove('lower-text-hover');
	  
  }

  redirect(link){
  	 this.router.navigate([link]);
  }

  intervalFunction(){
  	if(window.innerWidth<675)
  		this.mobile=true;
  	else
  		this.mobile=false;
  }



}
