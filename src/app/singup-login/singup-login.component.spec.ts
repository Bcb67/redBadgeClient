import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupLoginComponent } from './singup-login.component';

describe('SingupLoginComponent', () => {
  let component: SingupLoginComponent;
  let fixture: ComponentFixture<SingupLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
