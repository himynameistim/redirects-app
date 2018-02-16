import { Component, OnInit } from '@angular/core';
import { SciLogoutService } from '@speak/ng-sc/logout';
import { RedirectsService } from '../redirects.service';
import { Redirect } from '../redirect';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isNavigationShown = false;
  redirects: any;
  response: any;
  
  constructor(
    public logoutService: SciLogoutService,
    public redirectService: RedirectsService
  ) { }

  ngOnInit() {
    this.fetchRedirects();
  }

  fetchRedirects () {
    this.redirectService.getRedirects().subscribe(redirects => this.redirects = redirects)
    this.redirectService.fetchItem('588AB906-6191-4545-9566-06988CA6219C').subscribe({
      next: data => {
        this.response = data;
       // this.sampleItem = data as SampleItem;
       // this.isLoading = false;
      },
      error: error => {
        this.response = error;
      //  this.sampleItem = null;
      //  this.isErrorResponse = true;
      //  this.isLoading = false;
      }
    });
  }

}
