import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoodlesListComponent } from './noodles-list.component';

describe('NoodlesListComponent', () => {
  let component: NoodlesListComponent;
  let fixture: ComponentFixture<NoodlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoodlesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoodlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
