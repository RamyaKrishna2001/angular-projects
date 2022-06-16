import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreamStoneComponent } from './cream-stone.component';

describe('CreamStoneComponent', () => {
  let component: CreamStoneComponent;
  let fixture: ComponentFixture<CreamStoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreamStoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreamStoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
