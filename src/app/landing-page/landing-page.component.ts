import { Component, OnInit } from '@angular/core';
import { SciLogoutService } from '@speak/ng-sc/logout';
import { RedirectsService } from '../redirects.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isNavigationShown = false;
  redirects: any;
  
  constructor(
    public logoutService: SciLogoutService,
    public redirectService: RedirectsService
  ) { }

  ngOnInit() {
  }

  fetchRedirects () {
    this.redirectService.getRedirects().subscribe(redirects => this.redirects = redirects)
  }

}
