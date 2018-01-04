import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { GlobalDataService } from '../../shared/service/globaldata/globaldata.service';

@Component({
  selector: 'moltin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _http: Http, private _globalDataService: GlobalDataService) { }

  ngOnInit() {
  }
}
