;
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './website/components/header/header.component';
import { LandingComponent } from './website/components/landing/landing.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutComponent } from './website/layout/layout.component';
import { InvestmentComponent } from './website/investment/investment.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { LucideAngularModule, Download, MapPin, Languages } from 'lucide-angular';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { OpportunitiesCardDetailsComponent } from './website/components/opportunities/opportunities-card-details/opportunities-card-details.component';
import { InvestmentOpportunitiesCardComponent } from './website/components/opportunities/investment-opportunities-card/investment-opportunities-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { LocationComponent } from './website/components/opportunities/opportunities-card-details/location/location.component';
import { DescriptionComponent } from './website/components/opportunities/opportunities-card-details/description/description.component';
import { FilesComponent } from './website/components/opportunities/opportunities-card-details/files/files.component';

register();
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    LayoutComponent,
    InvestmentComponent,
    OpportunitiesCardDetailsComponent,
    InvestmentOpportunitiesCardComponent,
    LocationComponent,
    DescriptionComponent,
    FilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    LucideAngularModule.pick({ Download }),
    LucideAngularModule.pick({ MapPin }),
    LucideAngularModule.pick({ Languages }),
    GoogleMapsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}