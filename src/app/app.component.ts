import { Component, OnInit } from '@angular/core';
import { SelectedTypeService } from './selected-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private selectedTypeService : SelectedTypeService) {}
  selectedType: number = 0
  ngOnInit(): void {
    this.selectedTypeService.getSelectedTypeUpdateListener().subscribe((selectedType) => this.selectedType = selectedType)
    this.selectedTypeService.init()
  }
}