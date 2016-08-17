// core
import { Component, OnInit, ViewEncapsulation } from '@angular/core'

// directives
import { InstagramComponent } from './components/instagram/instagram.component'
import { SocialLinkComponent } from './components/social-link/social-link.component'
import { SoundCloudComponent } from './components/soundcloud/soundcloud.component'
import { NavComponent } from './components/nav/nav.component'

// providers
import { DataService } from './data.service'

//
// decorator and class definition
@Component({
  moduleId: module.id,
  selector: 'app-root',
 	directives: [ InstagramComponent, SocialLinkComponent, SoundCloudComponent, NavComponent ],
	providers: [ DataService ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	
	sections: String[]
	
	//
	// setup and constructor
	
	constructor(private dataService:DataService) { }
	ngOnInit(){	}
	
	//
	// utilties
	
	getData(){
		this.dataService.getData().then(sections => this.sections = sections['sections'] )
	}
	
}