import { Routes } from '@angular/router';

import { StudentComponent } from './list.component';
import { StudentAddEditComponent } from './add-edit.component';
import { ViewComponent } from './view.component';

export const STUDENTS_ROUTES: Routes = [
    { path: '', component: StudentComponent },
    { path: 'add', component: StudentAddEditComponent },
    { path: 'edit/:id', component: StudentAddEditComponent },
    { path: 'view/:id', component: ViewComponent },

];