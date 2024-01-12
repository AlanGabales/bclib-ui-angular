import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'confirmation-dialog',
    templateUrl: 'confirmation-dialog.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule]
})
export class ConfirmationDialog {
    title: string = "Confirm Delete"
    message: string = "Are you sure?"
    confirmButtonText = "Yes"
    cancelButtonText = "Cancel"
    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ConfirmationDialog>) {
        if (data) {
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }

    onConfirmClick(): void {
        this.dialogRef.close(true);
    }

}