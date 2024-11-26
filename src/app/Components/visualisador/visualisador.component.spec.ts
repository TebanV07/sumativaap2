import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisadorComponent } from './visualisador.component';

describe('VisualisadorComponent', () => {
  let component: VisualisadorComponent;
  let fixture: ComponentFixture<VisualisadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualisadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualisadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
