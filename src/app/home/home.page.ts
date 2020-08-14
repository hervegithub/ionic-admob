import { Component } from '@angular/core';
import { AdMobFreeBannerConfig, AdMobFree, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private admobFree: AdMobFree) { }

  showBannerAd() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-7323367535223135/5231330207"
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare().then(() => {
      // success
    }).catch(e => alert(e));
  }

  showInterstitialAds() {
    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-7323367535223135/9359219427"
    };
    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.prepare().then(() => {
    }).catch(e => alert(e));
  }

  showRewardVideoAds() {
    let RewardVideoConfig: AdMobFreeRewardVideoConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-7323367535223135/2602239387"
    };
    this.admobFree.rewardVideo.config(RewardVideoConfig);
    this.admobFree.rewardVideo.prepare().then(() => {
    }).catch(e => alert(e));
  }


}
