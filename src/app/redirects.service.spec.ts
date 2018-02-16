import { TestBed, inject } from '@angular/core/testing';

import { RedirectsService } from './redirects.service';

describe('RedirectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectsService]
    });
  });

  it('should be created', inject([RedirectsService], (service: RedirectsService) => {
    expect(service).toBeTruthy();
  }));
});
