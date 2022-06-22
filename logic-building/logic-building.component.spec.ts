import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicBuildingComponent } from './logic-building.component';

describe('LogicBuildingComponent', () => {
  let component: LogicBuildingComponent;
  let fixture: ComponentFixture<LogicBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
