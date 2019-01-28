import { Component } from "@angular/core";

@Component(
  {
    selector : 'app-footer',
    templateUrl : './footer.component.html',
    styleUrls : [ './footer.component.css' ]
  }
)
export class Footer {
  private data : { auth : string , github : string } = {
    auth : 'Fernando jose',
    github: 'https://github.com/wxcorporations'
  };



  public openGithub () : void {
    window.open( this.data.github, 'blank');
  }

}
