import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/website/core/API';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private http: HttpClient) { }

  getAllOpportunities() {
    return this.http.get(`${API.baseURL}/web/investore/all-opportunities`);
  }

  getOpportunitiesDetails(id: number) {
    return this.http.get(`${API.baseURL}/web/investore/show-opportunities/${id}`)
  }
}
