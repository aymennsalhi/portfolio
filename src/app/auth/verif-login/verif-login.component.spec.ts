import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifLoginComponent } from './verif-login.component';

describe('VerifLoginComponent', () => {
  let component: VerifLoginComponent;
  let fixture: ComponentFixture<VerifLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
