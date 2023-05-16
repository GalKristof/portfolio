import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { referenceList } from '../data/reference-list';
import { LanguageService } from '../services/language.service';
import { data } from '../data/data-list';


@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})

export class ReferencesComponent {

  lang: 'hu' | 'en';

  data = data;

  public referenceList = referenceList;

  constructor(
    public dialog: MatDialog, 
    private languageService: LanguageService
    ) {
        this.lang = this.languageService.language.value;
        this.languageService.language.subscribe(() => this.lang = this.languageService.language.value);
    }
  
  openModal(id: number) {
    this.dialog.open(ReferencesModalDialog, {
      data: { id }
    });
  }
}

@Component({
  selector: 'references-modal-dialog',
  templateUrl: './references.modal.dialog.html',
})
export class ReferencesModalDialog {
  public id: number;
  reference: any;

  data = data;
  
  lang: 'hu' | 'en';

  constructor(
    public dialogRef: MatDialogRef<ReferencesModalDialog>, 
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private languageService: LanguageService
  ) {
    this.id = modalData.id;
    this.reference = referenceList.find(x => x.id === this.id);
    
    this.lang = this.languageService.language.value;
    this.languageService.language.subscribe(() => this.lang = this.languageService.language.value);
  }
  
  openSite()
  {
    window.open(this.reference.url, '_blank');
  }

  closeModal() {
    this.dialogRef.close();
  }
}
