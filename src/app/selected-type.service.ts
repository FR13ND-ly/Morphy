import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedTypeService {

  constructor() { }

  selectedType: number = 0;
  private selectedTypeUpdated = new Subject<number>() 

  init() {
    this.selectedType = parseInt(localStorage.getItem('selectedType')!)
    this.selectedTypeUpdated.next(this.selectedType)
  }

  getSelectedTypeUpdateListener() {
    return this.selectedTypeUpdated.asObservable()
  }

  selectType(type: number) {
    this.selectedType = type
    localStorage.setItem("selectedType", this.selectedType.toString())
    this.selectedTypeUpdated.next(this.selectedType)
  }
}
