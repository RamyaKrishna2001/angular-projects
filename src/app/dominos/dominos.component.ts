import { Component, OnInit } from '@angular/core';
import { DominosDataType } from 'src/Models/dominosDataType';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dominos',
  templateUrl: './dominos.component.html',
  styleUrls: ['./dominos.component.css'],
})
export class DominosComponent implements OnInit {
  dominosList: DominosDataType[];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getDominosList();
  }

  getDominosList() {
    this._apiService
      .getDominosItems()
      .subscribe((data: DominosDataType[]) => (this.dominosList = data));
  }
}
