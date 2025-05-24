import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeoPrevencionComponent } from './chequeo-prevencion.component';

describe('ChequeoPrevencionComponent', () => {
  let component: ChequeoPrevencionComponent;
  let fixture: ComponentFixture<ChequeoPrevencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeoPrevencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeoPrevencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
