import { Component, OnInit } from '@angular/core';
import { BakeryDataType } from 'src/Models/bakeryDataType';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css'],
})
export class BakeryComponent implements OnInit {
  bakeryList: BakeryDataType[];

  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    this.getBakeryItemsList();
  }

  getBakeryItemsList() {
    return this._api
      .getBakeryItems()
      .subscribe((data: BakeryDataType[]) => (this.bakeryList = data));
  }
}
