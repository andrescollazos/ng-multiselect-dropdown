import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MultiSelectComponent } from './multiselect.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ListFilterPipe } from './list-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule, FontAwesomeModule, MatTooltipModule],
  declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
  providers: [ListFilterPipe],
  exports: [MultiSelectComponent]
})

export class NgMultiSelectDropDownModule {
    static forRoot(): ModuleWithProviders<NgMultiSelectDropDownModule> {
      return {
        ngModule: NgMultiSelectDropDownModule
      };
    }
}
