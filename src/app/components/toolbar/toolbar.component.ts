import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private offcanvasService: NgbOffcanvas) {}

  openTop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'top' });
	}

}
