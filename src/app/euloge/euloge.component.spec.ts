import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EulogeComponent } from './euloge.component';

describe('EulogeComponent', () => {
  let component: EulogeComponent;
  let fixture: ComponentFixture<EulogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EulogeComponent]
    });
    fixture = TestBed.createComponent(EulogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
