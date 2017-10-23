import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
// import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';
import {DemoPage} from '../demo/demo';
import {JumpPage} from '../jump/jump';
import {GoodsPage} from '../goods/goods';
// import {MySlide} from '../my-slide/my-slide';
@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = JumpPage;
  tab4Root: any = AboutPage;
  tab5Root: any = DemoPage;
  tab6Root: any = GoodsPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
