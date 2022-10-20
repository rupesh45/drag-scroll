import { TestBed } from '@angular/core/testing';

import { DragScrollService } from './drag-scroll.service';

describe('DragScrollService', () => {
  let service: DragScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
