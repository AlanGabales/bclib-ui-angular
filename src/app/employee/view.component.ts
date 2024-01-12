import { Component, OnInit } from '@angular/core';
import { NgIf, NgClass, CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { first } from 'rxjs/operators';

import { BookService, BorrowersRecordService, EmployeeService } from '@app/_services';
import { AlertService } from '@app/_components/alert/alert.service';
import { Book, BorrowersRecord, Employee } from '@app/_models';

@Component({ 
    templateUrl: 'view.component.html',
    styleUrls: ['employee.component.css'],
    standalone: true,
    imports: [
        NgIf, NgClass, CommonModule, RouterLink,
        MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        MatSelectModule, MatAutocompleteModule
    ]
})
export class ViewComponent implements OnInit {
    id?: string;
    employee: Employee | undefined;
    title = 'View Employee';
    loading = false;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private employeeService: EmployeeService
    ) { }
    
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        if (this.id) {
            this.loading = true;
            this.employeeService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.employee=x
                    console.log(this.employee)
                });
        }
        
    }

    
}