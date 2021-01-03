import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { InventoryComponent } from './inventory/inventory.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'stock', component: StockComponent },
  { path: 'inventory', component: InventoryComponent },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
