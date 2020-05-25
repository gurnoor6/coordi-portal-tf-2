import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { ManagerdetailComponent } from './managerdetail/managerdetail.component';
import { CoordimemoriesComponent } from './coordimemories/coordimemories.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxGlideModule } from 'ngx-glide';
import { ResultsComponent } from './results/results.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentsComponent,
    DepartmentdetailComponent,
    ManagerdetailComponent,
    CoordimemoriesComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUsefulSwiperModule,
    SwiperModule,
    NgxGlideModule,
    NgxUiLoaderModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
