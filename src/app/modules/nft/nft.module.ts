import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftRoutingModule } from './nft-routing.module';
import { NftComponent } from './nft.component';


@NgModule({
  declarations: [
    NftComponent
  ],
  imports: [
    CommonModule,
    NftRoutingModule
  ]
})
export class NftModule { }
