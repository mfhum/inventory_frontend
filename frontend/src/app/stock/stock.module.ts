import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [StockComponent],
  imports: [CommonModule, ComponentsModule, MaterialModule, ReactiveFormsModule]
})
export class StockModule {}
