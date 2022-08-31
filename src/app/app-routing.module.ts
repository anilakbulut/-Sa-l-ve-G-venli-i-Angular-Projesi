import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonconformityDetailsComponent } from './nonconformity-details/nonconformity-details.component';

const routes: Routes = [
  { path: 'app-nonconformity-details', component: NonconformityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
