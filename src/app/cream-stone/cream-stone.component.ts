import { Component, OnInit } from '@angular/core';
import { CreamStoneDataType } from 'src/Models/creamStoneDataType';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cream-stone',
  templateUrl: './cream-stone.component.html',
  styleUrls: ['./cream-stone.component.css'],
})
export class CreamStoneComponent implements OnInit {
  creamStoneList: CreamStoneDataType[];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {}

  getCreamStoneList() {
    return this._apiService
      .getCreamStoneItems()
      .subscribe((data: CreamStoneDataType[]) => (this.creamStoneList = data));
  }
}
