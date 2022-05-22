import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewsapiserviceService } from './newsapiservice.service';

describe('NewsapiserviceService', () => {
  let service: NewsapiserviceService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NewsapiserviceService);
  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
