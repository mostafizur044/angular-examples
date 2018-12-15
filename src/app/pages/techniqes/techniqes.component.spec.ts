import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqesComponent } from './techniqes.component';

describe('TechniqesComponent', () => {
  let component: TechniqesComponent;
  let fixture: ComponentFixture<TechniqesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechniqesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniqesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
