import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopanComponent } from './autopan.component';

describe('AutopanComponent', () => {
  let component: AutopanComponent;
  let fixture: ComponentFixture<AutopanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutopanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
