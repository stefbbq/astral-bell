import { Component, OnInit } from '@angular/core'
import { Http, Response} from '@angular/http'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { ViewEncapsulation } from '@angular/core'
declare let Instafeed:any

@Component({
  moduleId: module.id,
  selector: 'app-instagram',
	// providers: [Http],
  templateUrl: 'instagram.component.html',
  styleUrls: ['instagram.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class InstagramComponent implements OnInit {
	
  constructor($http:Http){
		
		// ab feed
		// var feed = new Instafeed({
		//       get: 'user',
		// 	userId: '3275217278',
		//       // clientId: '03a28f66d17b47718ececb8eaf5f5654',
		// 	accessToken: '3275217278.945c202.92052ef935df43e9a284418747a26be0',
		// 	template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><span class="caption">{{caption}}</caption>',
		// 	resolution: 'standard_resolution'
		//     })
		
		// testing feed
		var feed = new Instafeed({
			get: 'user',
			userId: '3275217278',
			accessToken: '3275217278.945c202.92052ef935df43e9a284418747a26be0',
			template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><span class="caption">{{caption}}</caption>',
			resolution: 'standard_resolution'
    })
		
    feed.run()
  }

  ngOnInit() { }
}