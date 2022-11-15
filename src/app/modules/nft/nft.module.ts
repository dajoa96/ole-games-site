import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NftRoutingModule } from './nft-routing.module';
import { NftComponent } from './nft.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NftComponent
  ],
  imports: [
    CommonModule,
    NftRoutingModule,
    SharedModule
  ]
})
export class NftModule { }
