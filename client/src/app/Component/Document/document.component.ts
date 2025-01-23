import { Component, OnInit } from '@angular/core';
import { Document } from '../../models/document.model.js'; // Importez la classe Document
import { Chemin } from '../../models/chemin.model.js'; // Importez la classe Chemin
import { TYPE_DOC } from '../../models/type-doc.enum.js'; // Importez l'énumération TYPE_DOC

@Component({
  selector: 'app-document', // Sélecteur pour utiliser ce composant dans un template
  templateUrl: './document.component.html', // Fichier HTML associé
  styleUrls: ['./document.component.css'] // Fichiers CSS associés
})
export class DocumentComponent implements OnInit {
  // Attributs de la classe
  document: Document; // Instance de la classe Document

  // Constructeur
  constructor() {
    // Créez une instance de Chemin
    const chemin = new Chemin('document1/documents', 'mondocument', 'txt');

    // Créez une instance de Document
    this.document = new Document(chemin, 1024, 'A1B2C3D4E5F6G');
  }

  // Méthode ngOnInit (cycle de vie Angular)
  ngOnInit(): void {
    console.log('DocumentComponent initialisé');
    this.afficherDetailsDocument();
  }

  // Méthode pour afficher les détails du document
  afficherDetailsDocument(): void {
    console.log('Détails du document :');
    console.log(`Chemin : ${this.document.getChemin()}`);
    console.log(`Taille : ${this.document.getTaille()} octets`);
    console.log(`Propriétaire : ${this.document.getIdentifiantProprietaire()}`);
    console.log(`Type : ${this.document.type}`);
  }
}