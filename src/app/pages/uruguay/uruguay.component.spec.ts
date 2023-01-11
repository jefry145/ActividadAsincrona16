import { ComponentFixture, TestBed } from '@angular/core/testing';

import { uruguayComponent } from './uruguay.component';

describe('uruguayComponent', () => {
  let component: uruguayComponent;
  let fixture: ComponentFixture<uruguayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ uruguayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(uruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
