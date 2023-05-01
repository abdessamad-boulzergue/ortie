import { Component, OnInit,Input,HostBinding } from '@angular/core';

@Component({
  selector: 'ort-interactive-card',
  templateUrl: './interactive-card.component.html',
  styleUrls: ['./interactive-card.component.css']
})
export class InteractiveCardComponent implements OnInit {


  @Input() size: { width: string; height: string } = {width:'auto',height:'auto'};

  @HostBinding('style.width') get hostWidth() {
    return this.size?.width || 'auto';
  }

  @HostBinding('style.height') get hostHeight() {
    return this.size?.height || 'auto';
  }

  constructor() { }


  ngOnInit(): void {
  }

}
