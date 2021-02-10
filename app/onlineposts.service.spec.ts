import { TestBed } from '@angular/core/testing';

import { OnlinepostsService } from './onlineposts.service';

describe('OnlinepostsService', () => {
  let service: OnlinepostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlinepostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
