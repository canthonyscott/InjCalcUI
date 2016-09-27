/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OligosService } from './oligos.service';

describe('Service: Oligos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OligosService]
    });
  });

  it('should ...', inject([OligosService], (service: OligosService) => {
    expect(service).toBeTruthy();
  }));
});
