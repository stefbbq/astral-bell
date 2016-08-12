import { Component, OnInit } from '@angular/core'
// import { DataService } from './data.service'
// import { PageScroll } from 'ng2-page-scroll'
// import { ROUTER_DIRECTIVES, Router, RouterLink } from "@angular/router"
// import 'ng2scroll'
// import { Http, Response } from '@angular/http'
// import { Observable } from 'rxjs/Rx'
// import 'rxjs/add/operator/map'

@Component({
  moduleId: module.id,
  selector: 'app-nav',
	// directives: [ PageScroll ],
	// providers: [ DataService ],
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})
export class NavComponent implements OnInit {
	
	sections: Object[]
	
	//
	// setup and constructor

  constructor(
		// private $dataService:DataService
	) { }

  ngOnInit() { }
	
	//
	// events
	
	onDataLoadComplete(){
		// this.sections = this.data['sections']
	}
}