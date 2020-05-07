import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, NzCardModule],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})
export class StoreModule { }
