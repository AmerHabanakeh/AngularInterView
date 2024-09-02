import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {
  @Input() files!: any[];

  extractFileName(url: string): string {
    if (!url) return '';
    const segments = url.split('/');
    return segments.pop() || '';
  }
}
