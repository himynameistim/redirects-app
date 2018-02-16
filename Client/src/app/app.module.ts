import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScAccountInformationModule } from '@speak/ng-bcl/account-information';
import { ScActionBarModule } from '@speak/ng-bcl/action-bar';
import { ScApplicationHeaderModule } from '@speak/ng-bcl/application-header';
import { ScButtonModule } from '@speak/ng-bcl/button';
import { ScGlobalHeaderModule } from '@speak/ng-bcl/global-header';
import { ScGlobalLogoModule } from '@speak/ng-bcl/global-logo';
import { ScIconModule } from '@speak/ng-bcl/icon';
import { ScMenu, ScMenuCategory, ScMenuItem, ScMenuItemLink, ScMenuModule } from '@speak/ng-bcl/menu';
import { ScTableModule } from '@speak/ng-bcl/table';

import { ScPageModule } from '@speak/ng-bcl/page';
import { CONTEXT, DICTIONARY } from '@speak/ng-bcl';

import { NgScModule } from '@speak/ng-sc';
import { AppRoutingModule } from './/app-routing.module';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
//import { InMemoryDataService } from './in-memory-data.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RedirectsService } from './redirects.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScAccountInformationModule,
    ScActionBarModule,
    ScApplicationHeaderModule,
    ScButtonModule,
    ScGlobalHeaderModule,
    ScGlobalLogoModule,
    ScIconModule,
    ScPageModule,
    ScMenuModule, 
    ScTableModule,   
HttpModule,
    HttpClientModule,

    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, { dataEncapsulation: false }
    //),

    NgScModule.forRoot({

      contextToken: CONTEXT, // Provide Sitecore context for SPEAK 3 Components (optional)
      
      dictionaryToken: DICTIONARY, // Provide translations for SPEAK 3 Components (optional)
      translateItemId: '0C979B7C-077E-4E99-9B15-B49592405891', // ItemId where your application stores translation items (optional)

      authItemId: '1BC79B7C-012E-4E9C-9B15-B4959B123653' // ItemId where your application stores user access authorization (optional)

    })
  ],
  providers: [RedirectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
