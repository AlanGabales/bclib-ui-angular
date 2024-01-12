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

import { AccessionService } from '@app/_services';
import { AlertService } from '@app/_components/alert/alert.service';
import { Accession, Book } from '@app/_models';

@Component({ 
    templateUrl: 'view.component.html',
    styleUrls: ['accession.component.css'],
    standalone: true,
    imports: [
        NgIf, NgClass, CommonModule, RouterLink,
        MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
        MatSelectModule, MatAutocompleteModule
    ]
})
export class ViewComponent implements OnInit {
    id?: string;
    accession: Accession | undefined;
    title = 'View Accession';
    loading = false;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private accessionService: AccessionService
    ) { }
    
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        if (this.id) {
            this.loading = true;
            this.accessionService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.accession=x
                    console.log(this.accession)
                });
        }
        
    }

    
}