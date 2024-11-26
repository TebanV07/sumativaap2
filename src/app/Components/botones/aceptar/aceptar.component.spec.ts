import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarComponent } from './aceptar.component';

describe('AceptarComponent', () => {
  let component: AceptarComponent;
  let fixture: ComponentFixture<AceptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AceptarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
