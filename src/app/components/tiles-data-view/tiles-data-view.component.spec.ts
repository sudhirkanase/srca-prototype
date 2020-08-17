import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesDataViewComponent } from './tiles-data-view.component';

describe('TilesDataViewComponent', () => {
  let component: TilesDataViewComponent;
  let fixture: ComponentFixture<TilesDataViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesDataViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
