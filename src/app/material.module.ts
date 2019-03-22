import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatTreeModule, MatFormFieldModule,
} from '@angular/material';

import { ScrollingModule } from '@angular/cdk/scrolling';

const MODULES = [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule,
  MatMenuModule, MatCardModule, MatPaginatorModule, ScrollingModule,MatBadgeModule];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class angularMaterialModules { }