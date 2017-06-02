import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginService } from './login.service';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

export class User {
  user: string;
  password: string;
}

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

    user: User = {
      user: '',
      password: ''
    };
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loginService: LoginService) {

    }

    ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {

      this.blockUI.start('Carregando...');

      if(this.user.user == 'admin' && this.user.password == 'admin*123'){
        this.router.navigate(['dashboard']);
        location.reload();
        this.blockUI.stop();
      }

      this.blockUI.stop();

      /*this.loginService.getMenus(this.user.user, this.user.password)
            .subscribe(
                data => {
                    if (localStorage.getItem('menus')) {
                      this.router.navigate(['dashboard']);
                      location.reload();
                    }
                    this.blockUI.stop();
                },
                error => {
                  this.router.navigate(['dashboard']);
                  location.reload();
                  this.blockUI.stop();
                }); */

    }
}
