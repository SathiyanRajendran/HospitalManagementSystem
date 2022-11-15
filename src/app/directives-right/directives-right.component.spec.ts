import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesRightComponent } from './directives-right.component';

describe('DirectivesRightComponent', () => {
  let component: DirectivesRightComponent;
  let fixture: ComponentFixture<DirectivesRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
