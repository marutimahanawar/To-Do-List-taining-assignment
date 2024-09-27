import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule],
  standalone: true,
  template: `
<h2 mat-dialog-title class="bg-danger text-center text-white p-3 fs-1">
  Delete
</h2>
<mat-dialog-content class="fs-4">
 Are you sure you want to delete this task?
</mat-dialog-content>
<mat-dialog-actions class="d-flex justify-content-center mt-3">
  <button mat-button (click)="onCancel()" class="btn btn-primary btn-lg me-3">No</button>
  <button mat-button color="warn" (click)="onConfirm()" class="btn btn-danger btn-lg">Yes</button>
</mat-dialog-actions>
  `
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}