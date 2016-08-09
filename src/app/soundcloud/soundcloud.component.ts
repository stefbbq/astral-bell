import { Component, OnInit, HostListener } from '@angular/core'
declare let SC:any

@Component({
  moduleId: module.id,
  selector: 'app-soundcloud',
  templateUrl: 'soundcloud.component.html',
  styleUrls: ['soundcloud.component.css']
})
export class SoundCloudComponent implements OnInit {
	
	state:String = "hit play to start listening"
	scIframe:any
	sc:any
	songTitle:String
	isPaused:Boolean = true
	currentSong:Object
	
	//
	// setup

  constructor() {
	  // this.renderer.listenGlobal("message", this.windowListener, false)
	}	
	
  ngOnInit() {
		this.scIframe = document.getElementById('sc-widget')
		this.sc = SC.Widget(this.scIframe)

	}
	
	//
	// events
	
	@HostListener('window:message', ['$event']) windowListener($e){
		
		let data = JSON.parse($e.data)

		if(data.method == 'isPaused'){
			if(data.value == false) this.isPaused = false
		 	else this.isPaused = true
		}

		if(data.method == 'getCurrentSound'){
			this.songTitle = data.value.title
		}
	}
	
	onPlayClick($e){
		if(this.isPaused){
			this.sc.play()
			this.state = 'listening to '
		} else {
			this.sc.pause()
			this.state = 'paused on '
		}
		
		this.sc.isPaused()
		this.sc.getCurrentSound()			
	}
	
	//
	// utils
	
	updateSongTitle(){
		this.songTitle = 'jibbajabba'
	}
}
