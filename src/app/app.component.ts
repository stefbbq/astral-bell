import { Component, OnInit } from '@angular/core'
import { InstagramComponent } from './instagram/instagram.component'
import { SocialLinkComponent } from './social-link/social-link.component'
import { SoundCloudComponent } from './soundcloud/soundcloud.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
	directives: [InstagramComponent, SocialLinkComponent, SoundCloudComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
	// init:String = ""
	
	ngOnInit(){
		// setTimeout(() => this.timer(), 500)
	}
	
	timer(){
		// this.init = 'init'
	}
}