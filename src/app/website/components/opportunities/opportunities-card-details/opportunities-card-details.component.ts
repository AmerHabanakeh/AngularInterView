import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-opportunities-card-details',
  templateUrl: './opportunities-card-details.component.html',
  styleUrls: ['./opportunities-card-details.component.scss']
})
export class OpportunitiesCardDetailsComponent {
  id!: number;
  dataDetails: any = [];
  constructor(private route: ActivatedRoute, private cardService: CardServiceService) { }
  center: google.maps.LatLngLiteral = { lat: 40.73061, lng: -73.935242 };
  zoom = 1;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPosition: google.maps.LatLngLiteral = this.center;


  ngOnInit() {
    this.route.params.subscribe((param: any) => {
      this.id = param['id'];
    })
    this.getDetails();
  }

  getDetails() {
    this.cardService.getOpportunitiesDetails(this.id).subscribe((res: any) => {
      this.dataDetails = res.data;
      this.center = { lat: +this.dataDetails.latitude, lng: +this.dataDetails.longitude }
    })
  }

  extractFileName(url: string) {      // To Show The Name of Image in the Files Tab => Table 
    if (!url) return '';
    const segments = url.split('/');
    return segments.pop() || '';
  }
}


