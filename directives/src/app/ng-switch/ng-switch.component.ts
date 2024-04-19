import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
  page : string = "";

  onChangeAbout(){this.page = "about"};
  onChangeService(){this.page = "service"};
  onChangeProducts(){this.page = "products"};
  onChangeGallery(){this.page = "gallery"};
}

