import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//angular firebase coneccion
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from '../environments/environment';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  
} from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { CRUDoptionComponent } from './components/crudoption/crudoption.component';
import { EnableUserComponent } from './components/enable-user/enable-user.component';
import { ShowOrderComponent } from './components/show-order/show-order.component';
import { EnableOrdersComponent } from './components/enable-orders/enable-orders.component';
import { CloseOrdersComponent } from './components/close-orders/close-orders.component';
import { ChooseBuyerComponent } from './components/choose-buyer/choose-buyer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ConsolidateTableComponent } from './components/consolidate-table/consolidate-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyOrderComponent,
    CRUDoptionComponent,
    EnableUserComponent,
    ShowOrderComponent,
    EnableOrdersComponent,
    CloseOrdersComponent,
    ChooseBuyerComponent,
    NavigationComponent,
    ConsolidateTableComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule
  ],
  entryComponents: [ShowOrderComponent, ConsolidateTableComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
