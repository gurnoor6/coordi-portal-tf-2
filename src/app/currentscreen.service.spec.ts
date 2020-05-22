import { TestBed } from '@angular/core/testing';

import { CurrentscreenService } from './currentscreen.service';

describe('CurrentscreenService', () => {
  let service: CurrentscreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentscreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
