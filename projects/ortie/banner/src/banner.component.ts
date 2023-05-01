import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() imageUrl: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
