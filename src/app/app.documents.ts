import { Component } from '@angular/core';
import { routerTransition } from './app.router.animations';

@Component({
  selector: 'app-documents',
  templateUrl: './app.documents.html',
  styleUrls: ['./app.documents.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})

export class DocumentsComponent {

}
