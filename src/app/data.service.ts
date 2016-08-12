import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
	
	data: Object
	sections: String[]

	//
	// setup and constructor
 
  constructor($http: Http) { 
		this.data = {myData:[]};
		$http.get('./app/data/data.json')
			.map((res: Response) => res.json())
			.subscribe(data => this.data = data,
                 err => console.log(err),
								 () => this.onDataLoadComplete())
	}

	//
	// events
	
	onDataLoadComplete(){
		this.sections = this.data['sections']
	}
	
	//
	// getter
	
	getData() { return this.data }
}