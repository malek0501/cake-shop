import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesecakeComponent } from './cheesecake.component';

describe('CheesecakeComponent', () => {
  let component: CheesecakeComponent;
  let fixture: ComponentFixture<CheesecakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheesecakeComponent]
    });
    fixture = TestBed.createComponent(CheesecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
