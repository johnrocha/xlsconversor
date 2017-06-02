import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { MenuType } from './sidebar.metadata';
import { SidebarModule } from './sidebar.module';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

    constructor(  private router: Router){

    }

    ngOnInit() {

    }

    sair(){
      localStorage.removeItem("menus");
      localStorage.removeItem("password");
      localStorage.removeItem("user");
       window.location.href='#/'; 
      window.location.reload();
    }

}
