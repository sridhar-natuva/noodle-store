import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarentDetailComponent } from './restarent-detail.component';

describe('RestarentDetailComponent', () => {
  let component: RestarentDetailComponent;
  let fixture: ComponentFixture<RestarentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestarentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestarentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
