import { Routes } from '@angular/router';

import { PublisherComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { ViewComponent } from './view.component';

export const PUBLISHERS_ROUTES: Routes = [
    { path: '', component: PublisherComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent },
    { path: 'view/:id', component: ViewComponent },
];