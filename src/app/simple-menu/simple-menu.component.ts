import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-menu',
  templateUrl: './simple-menu.component.html',
  styleUrls: ['./simple-menu.component.css']
})
export class SimpleMenuComponent { @Input() visible: boolean; }
