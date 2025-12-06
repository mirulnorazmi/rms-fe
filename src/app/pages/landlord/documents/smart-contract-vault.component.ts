import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../../../core/services/mock/document.service';
import { Document } from '../../../core/models/document.model';

@Component({
  selector: 'app-smart-contract-vault',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smart-contract-vault.component.html',
  styles: []
})
export class SmartContractVaultComponent implements OnInit {
  private documentService = inject(DocumentService);
  documents: Document[] = [];
  showAIModal = false;

  ngOnInit() {
    this.documentService.getDocuments().subscribe(data => {
      this.documents = data;
    });
  }

  openAIModal() {
    this.showAIModal = true;
  }

  closeAIModal() {
    this.showAIModal = false;
  }
}

