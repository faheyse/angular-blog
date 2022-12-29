import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrftComponent } from './orft.component';

describe('OrftComponent', () => {
  let component: OrftComponent;
  let fixture: ComponentFixture<OrftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
