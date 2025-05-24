import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoramientoNutricionalComponent } from './asesoramiento-nutricional.component';

describe('AsesoramientoNutricionalComponent', () => {
  let component: AsesoramientoNutricionalComponent;
  let fixture: ComponentFixture<AsesoramientoNutricionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoramientoNutricionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesoramientoNutricionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
