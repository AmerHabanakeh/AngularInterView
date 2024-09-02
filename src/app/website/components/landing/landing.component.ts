import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FilterData } from './dataModel';
import { CardServiceService } from '../opportunities/card-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  showFilter = false;
  filterForm!: FormGroup;
  data: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, public translate: TranslateService, public cardService: CardServiceService) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      category: [''],
      keySearch: [''],
      economicActivity: [''],
      opportunityStatus: ['']
    });
  }


  applyFilter() {
    let ft: any = {}
    if (this.filterForm.get('opportunityStatus')?.value) {
      ft['status'] = { status: this.filterForm.get('opportunityStatus')?.value }
    }

    if (this.filterForm.get('category')?.value) {
      ft['category'] = { id: +this.filterForm.get('category')?.value }
    }
    if (this.filterForm.get('economicActivity')?.value) {
      ft['price'] = { min: +this.filterForm.get('economicActivity')?.value, max: +this.filterForm.get('economicActivity')?.value }
    }

    ft = { filters: ft }
    this.cardService.ApplyFilter(ft, this.filterForm.get('keySearch')?.value).subscribe((res: any) => {
      console.log(res);
      this.cardService.data = res.data.data;
    })
  }


}
