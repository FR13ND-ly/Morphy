import { TestBed } from '@angular/core/testing';

import { SelectedTypeService } from './selected-type.service';

describe('SelectedTypeService', () => {
  let service: SelectedTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
