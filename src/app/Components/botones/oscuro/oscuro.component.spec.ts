import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscuroComponent } from './oscuro.component';

describe('OscuroComponent', () => {
  let component: OscuroComponent;
  let fixture: ComponentFixture<OscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
