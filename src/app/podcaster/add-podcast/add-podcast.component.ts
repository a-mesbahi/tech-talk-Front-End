import { PodcastService } from './../services/podcast.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-podcast',
  templateUrl: './add-podcast.component.html',
  styleUrls: ['./add-podcast.component.scss']
})
export class AddPodcastComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private podcastService:PodcastService) { }
  addPodcastForm!:FormGroup;
  sendingRequest:boolean = false;



  ngOnInit(): void {
    this.addPodcastForm = this.formbuilder.group({
      "title":this.formbuilder.control(''),
      "description":this.formbuilder.control(''),
      "FileAudio":null,
      "picture":null,
    })
  }

  selectPic(event:any){
    const file = event.target.files[0];
    this.addPodcastForm.get('picture')?.setValue(file);
  }
  
  selectAudio(event:any){
    const file = event.target.files[0];
    this.addPodcastForm.get('FileAudio')?.setValue(file);
  }

  addPodcast(){
    this.sendingRequest = true
    this.podcastService.addPodcast(this.addPodcastForm).subscribe({
      next:(re)=>{
        console.log(re)
      },
      error:(err)=>{
        this.sendingRequest = false
        console.log(err)
      },
      complete:()=>{
        this.sendingRequest = false
      }
    });
  }


}
