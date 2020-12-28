import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [InventoryComponent],
  imports: [CommonModule, ComponentsModule, MaterialModule]
})
export class InventoryModule {}
