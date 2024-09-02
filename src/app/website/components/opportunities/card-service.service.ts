import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/website/core/API';
import { FilterData } from '../landing/dataModel';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  data: any[] = [];

  constructor(private http: HttpClient) { }

  getAllOpportunities() {
    return this.http.get(`${API.baseURL}/web/investore/all-opportunities`);
  }

  getOpportunitiesDetails(id: number) {
    return this.http.get(`${API.baseURL}/web/investore/show-opportunities/${id}`)
  }

  ApplyFilter(filterData: FilterData, searchKey: string) {
    let url = `${API.baseURL}/web/investore/all-opportunities`;
    if (!!searchKey) {
      url += "?search-key=" + searchKey;
    }
    return this.http.post(url, filterData)

  }
}
