import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'nb-entryupdate-dialog',
  templateUrl: '../../views/entries/entryupdate.dialog.html',
})

export class EntryupdateDialogComponent {
  constructor(public dialogRef: MdDialogRef<EntryupdateDialogComponent>) {}
}