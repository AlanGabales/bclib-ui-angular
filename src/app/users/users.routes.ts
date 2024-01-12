import { Routes } from '@angular/router';

import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { ProfileComponent } from './profile.component';

export const USERS_ROUTES: Routes = [
    { path: '', component: ListComponent },
    { path: 'add', component: AddEditComponent },
    { path: 'edit/:id', component: AddEditComponent },
    { path: 'profile/:id', component: ProfileComponent }
];