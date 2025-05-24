import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdontologiaComponent } from './odontologia.component';

describe('OdontologiaComponent', () => {
  let component: OdontologiaComponent;
  let fixture: ComponentFixture<OdontologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdontologiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdontologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
