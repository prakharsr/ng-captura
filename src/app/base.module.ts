import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdsenseModule } from 'ng2-adsense';
import { MaterialModule } from './material.module';

import { environment } from '../environments/environment';

import { GithubApiService } from './services/github-api.service';
import { LatestReleaseResolver } from './services/latest-release-resolver.service';
import { LoaderService } from './services/loader.service';

import { FileSizePipe } from './file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4251360406988977',
      adSlot: '7875153049',
      adtest: environment.production ? "off" : "on"
    }),
    MaterialModule
  ],
  providers: [
    GithubApiService,
    LatestReleaseResolver,
    LoaderService
  ],
  declarations: [
    FileSizePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdsenseModule,
    MaterialModule,
    FileSizePipe
  ],
  entryComponents: []
})
export class BaseModule { }
