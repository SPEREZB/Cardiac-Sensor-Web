import { TareaService } from './tarea.service';
import { TestBed } from '@angular/core/testing';
 

describe('TareaService', () => {
  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
