/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatService } from './candidat.service';

describe('Service: CandidatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatServiceService]
    });
  });

  it('should ...', inject([CandidatServiceService], (service: CandidatServiceService) => {
    expect(service).toBeTruthy();
  }));
});
