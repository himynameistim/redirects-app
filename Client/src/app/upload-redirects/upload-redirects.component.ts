import { Component, OnInit, ViewChild } from '@angular/core';
import { SciLogoutService } from '@speak/ng-sc/logout';
import { RedirectsService } from '../redirects.service';



@Component({
  selector: 'app-upload-redirects',
  templateUrl: './upload-redirects.component.html',
  styleUrls: ['./upload-redirects.component.scss']
})
export class UploadRedirectsComponent implements OnInit {

  isNavigationShown = false;

  constructor(
    public logoutService: SciLogoutService,
    public redirectService: RedirectsService    
  ) { }

  ngOnInit() {
  }

  @ViewChild("fileInput") fileInput;

  uploadFile() {  
    debugger;  
    let fi = this.fileInput.nativeElement;  
    if (fi.files && fi.files[0]) {  
      let file: File = fi.files[0];
        
      this.redirectService.uploadFile(file).subscribe(res => {
        console.log(res);
    });
    
    }  
  }
}
