
import { Component, ViewChild,OnInit } from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  	const config = {
  		type:'carousel',
  		perView:3,
  		gap:64,
  		breakpoints:{
  			675: {
		    perView: 1
		  }
  		}

  	}
  	    new Glide('.glide',config).mount();

  }


  zoomIn(event){
  	console.log(event);
  	let element_description = event['path'][2].children[2];
  	let element_num = event['path'][2].children[1];
  	element_description.classList.add('text-name-hover');
  	element_num.classList.add('border-white');
  }

  
  zoomOut(event){
  	let element_description = event['path'][2].children[2];
  	let element_num = event['path'][2].children[1];
  	element_description.classList.remove('text-name-hover');
  	element_num.classList.remove('border-white');
  }



}
