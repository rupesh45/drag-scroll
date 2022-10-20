import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragScrollComponent } from './drag-scroll.component';

describe('DragScrollComponent', () => {
  let component: DragScrollComponent;
  let fixture: ComponentFixture<DragScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
