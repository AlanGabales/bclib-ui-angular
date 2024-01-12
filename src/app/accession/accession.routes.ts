import { Routes } from '@angular/router';

import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { ViewComponent } from './view.component';

export const ACCESSION_ROUTES: Routes = [
    { path: '', component: ListComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent },
    { path: 'view/:id', component: ViewComponent },
];