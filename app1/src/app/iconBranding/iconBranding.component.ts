import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-icon-branging',
    templateUrl: './iconBranding.component.html',
    styleUrls: ['./iconBranding.component.css']
  }
)
export class IconBranding {
  private img : { src : string , alt : string } = {
    src : 'https://udemy-images.udemy.com/user/50x50/10483584_4df9_2.jpg' ,
    alt : 'fernando j'
  }

}
