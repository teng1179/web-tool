import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTransComponent } from './map-trans.component';

describe('MapTransComponent', () => {
  let component: MapTransComponent;
  let fixture: ComponentFixture<MapTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
