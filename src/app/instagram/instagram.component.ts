<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ViewEncapsulation } from '@angular/core';
declare let Instafeed:any
=======
import { Component, OnInit } from '@angular/core'
import { JSONP_PROVIDERS, Jsonp, Response} from '@angular/http'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import './instafeed.min'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
>>>>>>> 2c149e7cf7af0115301505977ec29087e3c53698

@Component({
  moduleId: module.id,
  selector: 'app-instagram',
	providers: [JSONP_PROVIDERS],
	// providers: [Http],
  templateUrl: 'instagram.component.html',
  styleUrls: ['instagram.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class InstagramComponent implements OnInit {
<<<<<<< HEAD
	
  constructor($http:Http){
  
		var feed = new Instafeed({
      get: 'user',
			userId: '3275217278',
      // clientId: '03a28f66d17b47718ececb8eaf5f5654',
			accessToken: '3275217278.945c202.92052ef935df43e9a284418747a26be0',
			template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /><span class="caption">{{caption}}</caption>',
			resolution: 'standard_resolution'
    })
		
    feed.run()
  }

  ngOnInit() { }
}
=======
	weef
	http:Jsonp

	
  constructor($http:Jsonp) {
		this.http = $http
		
    // System.import('http://platform.instagram.com/en_US/embeds.js').then(refToLoadedModule => { refToLoadedModule.someFunction()	})

  }

  ngOnInit() {
		// instgrm.Embeds.process()
		
		// c9be4783adb749eb8b27626d86942036
		this.http.get('https://api.instagram.com/v1/users/self/?access_token=174239598.b44a868.95f0f405bed045cb8d7a8a8d4c6382ef&callback=?JSON_CALLBACK').map(response => { return response.json() }).subscribe(data => {this.assignData(data)}, this.error, this.printData)
		// this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=174239598.b44a868.95f0f405bed045cb8d7a8a8d4c6382ef').map(response => { return response.json() }).subscribe(data => {this.assignData(data)}, this.error, this.printData)
		// let weef2 = {}
		// this.http.get('http://ip.jsontest.com/').map(response => { return response.json() }).subscribe(data => this.assignData(data))
		
  }

	assignData($data:Object){
		this.weef = $data
		console.dir(this.weef)
	}
	error(){}
	printData(){
		console.dir(this.weef)
	}
	callbackFunction(){}
}


// 174239598.b44a868.95f0f405bed045cb8d7a8a8d4c6382ef
>>>>>>> 2c149e7cf7af0115301505977ec29087e3c53698
