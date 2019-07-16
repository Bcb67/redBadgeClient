import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFetchComponent } from './stock-fetch.component';

describe('StockFetchComponent', () => {
  let component: StockFetchComponent;
  let fixture: ComponentFixture<StockFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
