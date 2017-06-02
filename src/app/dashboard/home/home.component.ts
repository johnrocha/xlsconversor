import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login/login.service'
import { Router } from '@angular/router';
import { Dashboard, Races } from '../../model/uber.model';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  moduleId: module.id,
  selector: ' home-cmp ',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit{

  @BlockUI() blockUI: NgBlockUI;

  nameFile: string;
  textFile: string;
  cont: number = 0;
  dashboard: Dashboard = <Dashboard>{};

  public pie_ChartData = <any>[
        ['Task', 'Hours per Day']];

  public pie_ChartOptions = {
        title: '',
        width: 500,
        height: 320
    };

  constructor(
    private loginService: LoginService,
    private _router: Router) {

  }

  ngOnInit(){

  }

  onChange(event) {

    this.blockUI.start('Carregando arquivo...');

    var files = event.srcElement.files;

    this.nameFile = files[0].name;

    var reader = new FileReader();

    reader.onload = (e: Event) => {

      this.textFile = reader.result;

      var lines = this.textFile.split("\n");

      if(lines.length > 0){

        for (var i = 0; i < lines.length; i++) {

          var object = lines[i].split(",");

          if(i >= 6){

            var race = this.getRace(object);

            if(!this.dashboard.races){
              this.dashboard.races = [];
            }

            this.dashboard.races.push(race);

          }else if(i == 0){

            this.dashboard.nameCompany = object[1];

          }else if(i == 1){

            this.dashboard.administrator = object[1];

          }else if(i == 2){

            this.dashboard.reportDate = object[1];

          }

        }

        this.setPieOrg();

        console.log(this.dashboard);

        this.blockUI.stop();

      }

    }

    reader.readAsText(files[0]);
  }

  setPieOrg(){

    if(this.dashboard.races && this.dashboard.races.length > 0){

      for (var i = this.dashboard.races.length - 1; i >= 0; i--) {

        var total = 1;

        for (var j = this.dashboard.races.length - 1; j >= 0; j--) {

          if(this.dashboard.races[i].id != this.dashboard.races[j].id && this.dashboard.races[i].sector == this.dashboard.races[j].sector){

            total++;

          }

        }

        this.pie_ChartData.push([this.dashboard.races[i].sector, total]);

      }

    }

  }

  getRace(array): Races{
    var race = <Races>{};
    race.id = array[0];
    race.dateRace = array[1];
    race.hourRace = array[2];
    race.requestDate = array[3];
    race.requestHour = array[4];
    race.fuso = array[5];
    race.dateArrival = array[6];
    race.hourArrival = array[7];
    race.firstName = array[8];
    race.lastName = array[9];
    race.email = array[10];
    race.idFunc = array[11];
    race.service = array[12];
    race.city = array[13];
    race.distance = array[14];
    race.duration = array[15];
    race.valueGst = array[16];
    race.price = array[17];
    race.typeMone = array[18];
    race.priceBrazil = array[19];
    race.taxService = array[20];
    race.valueTotalBrazil = array[21];
    race.addressStart = array[22];
    race.addressEnd = array[23];
    race.codeDesp = array[24];
    race.detailDesp = array[25];
    race.futures = array[26];
    race.sector = array[27];
    return race;
  }

  getTitle(){
    return "Inicio";
  }

}
