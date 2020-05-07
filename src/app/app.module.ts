import { StoreModule } from './store/store.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EducationBackgroundComponent } from './education-background/education-background.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { TravelComponent } from './travel/travel.component';
import { ReadingManagementComponent } from './reading-management/reading-management.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

registerLocaleData(en);

const appRoutes: Routes = [
  { path: '', redirectTo: '/basicinfo', pathMatch: 'full'  },
  { path: 'basicinfo', component: BasicInfoComponent },
  { path: 'education', component: EducationBackgroundComponent },
  { path: 'work', component: WorkComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'readingmanagement', component: ReadingManagementComponent }
];
@NgModule({
   declarations: [
      AppComponent,
      WelcomePageComponent,
      BasicInfoComponent,
      EducationBackgroundComponent,
      WorkComponent,
      ProjectsComponent,
      TravelComponent,
      ReadingManagementComponent,
      TopBarComponent
   ],
   imports: [
      BrowserModule,
      StoreModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NzLayoutModule,
      NzMenuModule,
      NzBreadCrumbModule,
      RouterModule.forRoot(
        appRoutes,
        { onSameUrlNavigation: 'reload' }
      ),
   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
