import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class DataService {
	
	data: Object
	sections: String[]

	//
	// setup and constructor
 
  constructor(private http: Http) { 
		// this.data = {myData:[]};
		

		
		
		
	}

	//
	// events
	
	handleError(){
		console.log('on dataloadcomplete')
		// this.sections = this.data['sections']
	}
	
	//
	// getter
	
	getData() { 
		// return Promise.resolve(this.sections)
		// $http.get('./app/data/data.json')
// 			.map((res: Response) => res.json())
// 			.subscribe(data => this.data = data,
// 	               err => console.log(err),
// 								 () => this.onDataLoadComplete())
		return this.http.get('./app/data/data.json')
		           .toPromise().then(response => response.json() as Object[] )
		           .catch(this.handleError);
	}
}