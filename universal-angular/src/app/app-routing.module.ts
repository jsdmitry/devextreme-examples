import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionsAndListsComponent } from './actions-and-lists/actions-and-lists.component';
import { DialogsAndNotificationsComponent } from './dialogs-and-notifications/dialogs-and-notifications.component';
import { FormsAndMultiPurposeComponent } from './forms-and-multi-purpose/forms-and-multi-purpose.component';
import { EditorsComponent } from './editors/editors.component';
import { GridsComponent } from './grids/grids.component';
import { VizComponent } from './viz/viz.component';

const routes: Routes = [
  { path: '', redirectTo: '/editors', pathMatch: 'full' },
  { path: 'actions-and-lists', component: ActionsAndListsComponent },
  { path: 'dialogs-and-notifications', component: DialogsAndNotificationsComponent },
  { path: 'forms-and-multi-purpose', component: FormsAndMultiPurposeComponent },
  { path: 'editors', component: EditorsComponent },
  { path: 'grids', component: GridsComponent },
  { path: 'viz', component: VizComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
