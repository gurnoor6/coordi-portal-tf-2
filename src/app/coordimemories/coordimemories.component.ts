import { Component, OnInit } from '@angular/core';
import {memories } from './coordie-memories';
@Component({
  selector: 'app-coordimemories',
  templateUrl: './coordimemories.component.html',
  styleUrls: ['./coordimemories.component.css']
})
export class CoordimemoriesComponent implements OnInit {
  memories_list = memories;
  constructor() { }

  ngOnInit(): void {
  }

}
