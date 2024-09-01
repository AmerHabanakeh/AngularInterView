import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-investment-opportunities-card',
  templateUrl: './investment-opportunities-card.component.html',
  styleUrls: ['./investment-opportunities-card.component.scss']
})
export class InvestmentOpportunitiesCardComponent implements OnInit {
  ngOnInit(): void {
    this.getAllOpportunities()
  }

  data: any[] = [];

  constructor(private router: Router, private cardService: CardServiceService) { }

  opportunitiesDetails(id: number) {
    this.router.navigate([`/details/${id}`]);

  }

  getAllOpportunities() {
    this.cardService.getAllOpportunities().subscribe((res: any) => {
      this.data = res.data.data
      console.log(this.data);
    })
  }
}
