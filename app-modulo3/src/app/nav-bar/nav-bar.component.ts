import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  private title : string = "Comidas de boteco" ;

  private dataNav : {
    title : string ,
    alt : string ,
    src : string  } = {

    title : 'List Rescipes' ,
    alt : 'icon' ,
    src : 'https://lh3.googleusercontent.com/UpmmjPNoMp6Rcj5HN4FcGKveMiVMVLVzUyv-daNCaQ8oDA2_HfEvwo0h6yJv-rM0Cg=s100-rw'
  }

  private links : string[] = [
    'Recipes',
    'Shopping-List'
  ]

  ngOnInit() {
  }

}
