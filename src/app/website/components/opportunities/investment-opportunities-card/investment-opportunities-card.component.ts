import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardServiceService } from '../card-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-investment-opportunities-card',
  templateUrl: './investment-opportunities-card.component.html',
  styleUrls: ['./investment-opportunities-card.component.scss']
})
export class InvestmentOpportunitiesCardComponent implements OnInit {
  ngOnInit(): void {
    this.getAllOpportunities()
  }


  constructor(private router: Router, public cardService: CardServiceService, public translate: TranslateService) { }

  opportunitiesDetails(id: number) {
    this.router.navigate([`/details/${id}`]);

  }

  getAllOpportunities() {
    this.cardService.getAllOpportunities().subscribe((res: any) => {
      this.cardService.data = res.data.data
      // console.log(this.data);
    })
  }
}
