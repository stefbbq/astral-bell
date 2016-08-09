import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-social-link',
  templateUrl: 'social-link.component.html',
  styleUrls: ['social-link.component.css']
})
export class SocialLinkComponent implements OnInit {
	
	@Input() type:String
	link:String
	imagePath:String
	cta:String
	app:String

  constructor() {}
	
  ngOnInit() {
  	this.imagePath = this.getType()
		let copy:String[] = this.getCopy()
		this.cta = copy[0]
		this.app = copy[1]
		this.link = this.getLink()
  }
	
	getType(): String {
		switch(this.type){
		case 'facebook':
			return './app/_shared/images/social_facebook_g.png'
			break
		case 'instagram':
			return './app/_shared/images/social_instagram_g.png'
			break
		case 'soundcloud':
			return './app/_shared/images/social_soundcloud_g.png'
			break
		}
	}
	getCopy(): string[] {
		switch(this.type){
		case 'facebook':
			return ['Visit us on ', 'Facebook']
			break
		case 'instagram':
			return ['See our ', 'Instagram']
			break
		case 'soundcloud':
			return ['Listen to our ', 'SoundCloud']
			break
		}
	}
	getLink(): String {
		switch(this.type){
		case 'facebook':
			return 'http://www.facebook.com/astralbell.music'
			break
		case 'instagram':
			return 'http://www.instagram.com/astralbell'
			break
		case 'soundcloud':
			return 'http://www.soundcloud.com/astralbell'
			break
		}
	}
}