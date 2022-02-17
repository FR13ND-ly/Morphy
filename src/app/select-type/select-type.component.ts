import { Component, OnInit } from '@angular/core';
import { SelectedTypeService } from 'src/app/selected-type.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss']
})
export class SelectTypeComponent implements OnInit {

  constructor(private selectedTypeService : SelectedTypeService) { }
  ngOnInit(): void {
  }

  onSelectType(type: number) {
    this.selectedTypeService.selectType(type)
  }

}
