export class Dashboard {
  nameCompany: string;
  administrator: string;
	reportDate: string;
  races: Races[];
}

export class Races {
  id: string;
  dateRace: string;
  hourRace: string;
  requestDate: string;
  requestHour: string;
  fuso: string;
  dateArrival: string;
  hourArrival:string;
  firstName: string;
  lastName: string;
  email: string;
  idFunc: string;
  service: string;
  city: string;
  distance: string;
  duration: string;
  valueGst: string;
  price: string;
  typeMone: string;
  priceBrazil: string;
  taxService:string;
  valueTotalBrazil: string;
  addressStart: string;
  addressEnd: string;
  codeDesp: string;
  detailDesp: string;
  futures: string;
  sector: string;
}
