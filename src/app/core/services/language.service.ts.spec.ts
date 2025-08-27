import { TestBed } from '@angular/core/testing';

import { LanguageServiceTs } from './language.service.ts';

describe('LanguageServiceTs', () => {
  let service: LanguageServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
