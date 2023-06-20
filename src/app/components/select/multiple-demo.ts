import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from '../../../ng-multiselect-dropdown/src';

@Component({
  selector: 'multiple-demo',
  templateUrl: './multiple-demo.html'
})
export class MultipleDemoComponent implements OnInit {
  myForm: FormGroup;
  disabled = false;
  ShowFilter = true;
  showAll = false;
  limitSelection = false;
  limitShow = false;
  disableBangalore = false;
  cities: Array<any> = [];
  selectedItems: Array<any> = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cities = [
      { item_id: 1, item_text: 'Pereira', item_tooltip: 'The capital of Risaralda!' },
      { item_id: 2, item_text: 'Manizales' },
      { item_id: 3, item_text: 'Armenia', isDisabled: this.disableBangalore },
      { item_id: 4, item_text: 'Santa Rosa de Cabal' },
      { item_id: 5, item_text: 'Cartagena de Indias' },
      { item_id: 6, item_text: 'Santiago de Cali' },
      { item_id: 7, item_text: 'Santa Lucía' },
      { item_id: 8, item_text: 'Nariño' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Pereira' },
      { item_id: 6, item_text: 'Santiago de Cali' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      defaultOpen: false,
      idField: 'item_id',
      textField: 'item_text',
      tooltipField: 'item_tooltip',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: this.showAll,
      itemsShowLimit: 999999,
      allowSearchFilter: this.ShowFilter
    };
    this.myForm = this.fb.group({
      city: [this.selectedItems]
    });
  }

  onItemSelect(item: any) {
    console.log('onItemSelect', item);
    console.log('form model', this.myForm.get('city').value);
  }
  onItemDeSelect(item: any) {
    console.log('onItem DeSelect', item);
    console.log('form model', this.myForm.get('city').value);
  }

  onSelectAll(items: any) {
    console.log('onSelectAll', items);
  }

  onDropDownClose() {
    console.log('dropdown closed');
  }

  toogleShowAll() {
    this.showAll = !this.showAll;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      enableCheckAll: this.showAll
    });
  }
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
      allowSearchFilter: this.ShowFilter
    });
  }

  handleLimitSelection() {
    if (this.limitSelection) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: 2
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        limitSelection: -1
      });
    }
  }

  handleLimitShow() {
    if (this.limitShow) {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        itemsShowLimit: 3
      });
    } else {
      this.dropdownSettings = Object.assign({}, this.dropdownSettings, {
        itemsShowLimit: 999999
      });
    }
    console.log()
  }




  handleDisableBangalore() {
    this.cities[2].isDisabled = this.disableBangalore;
    this.cities = [...this.cities];
  }

  handleReset() {
    this.myForm.get('city').setValue([]);
  }
}
