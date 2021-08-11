import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public name = "Stiven Rojas";
  public age = 35;
  public single=true;

  public img_BDZ="assets/img/vegeta.jpg";

  constructor() { }

}
