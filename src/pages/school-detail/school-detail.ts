import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { School, Generation, Media } from '../../app/shared/sdk/models';
import { SchoolApi } from '../../app/shared/sdk/services';

/*
  Generated class for the SchoolDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-school-detail',
  templateUrl: 'school-detail.html'
})
export class SchoolDetailPage {
  public school: School;
  private generations = new Array<Generation>()

  constructor(public navCtrl: NavController, public navParams: NavParams, private schoolApi: SchoolApi) {
    this.school = navParams.get('school');
    this.getGenerations(this.school)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolDetailPage');
  }

  getGenerations(school) {
    this.schoolApi.getGenerations(school.id, {include:'photos'}).subscribe(
      (generations: Array<Generation>) => {
        for (var i = 0; i < generations.length; i++) {
          var generationData = generations[i]
          var photos = generationData.photos
          if (photos.length > 0) {
            var photo = photos[0].url
            generationData.photos[0].url = 'http://ec2-35-160-136-100.us-west-2.compute.amazonaws.com'+photo
          } else {
            var media = new Media()
            media.url = 'http://ec2-35-160-136-100.us-west-2.compute.amazonaws.com/storages/missing/placeholder.jpg'
            var medias = new Array<Media>()
            medias.push(media)
            generationData.photos = medias
          }

          this.generations.push(generationData)
        }
      },
      err => {
        if (err.status == 404) {
          console.log('This school does not have a generations. :(');
        } else {
          console.error(err);
        }
      },
      () => console.log('getDetails completed')
    )
  }

}
