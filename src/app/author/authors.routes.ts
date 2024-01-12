import { Routes } from '@angular/router';

import { AuthorComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { ViewComponent } from './view.component';

export const AUTHORS_ROUTES: Routes = [
    { path: '', component: AuthorComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent },
    { path: 'view/:id', component: ViewComponent },
];