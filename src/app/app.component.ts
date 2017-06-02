import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

declare var jQuery: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
  location: Location;
  @BlockUI() blockUI: NgBlockUI;
  constructor(location:Location) {
    this.location = location;
  }
  ngOnInit(){
    jQuery.getScript('../assets/js/init/initMenu.js');
    jQuery.getScript('../assets/js/demo.js');
  }

  public isAuth(){
    // console.log(this.location);
    if(this.location.prepareExternalUrl(this.location.path()).indexOf("auth") !== -1){
      return true;
    } else {
      return false;
    }
  }

  public isMap(){
      // console.log(this.location);
      if(this.location.prepareExternalUrl(this.location.path()) == '#/maps/fullscreen'){
          return true;
      }
      else {
          return false;
      }
  }

}
