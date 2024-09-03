import { Component, Input } from '@angular/core';
import { CardServiceService } from '../../card-service.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {

  constructor(private cardService: CardServiceService) { }
  @Input() files!: any[];

  extractFileName(url: string): string {
    if (!url) return '';
    const segments = url.split('/');
    return segments.pop() || '';
  }

  onDownload(image: any): void {
    const fileName = image;
    this.cardService.downloadFile(fileName).subscribe(response => {
      const blob = new Blob([response], { type: response.type });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }, error => {
      console.error('Download error:', error);
    });
  }

}
