import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private ADD_PODCAST_ENDPOINT = "podcast-service/podcasts";
  constructor(private httpClient:HttpClient) { }


  addPodcast(pocastForm:FormGroup){
      let podcastFormData = new FormData();
      Object.keys(pocastForm.controls).forEach(key => {
        const control = pocastForm.get(key);
        console.log(control?.value)
        podcastFormData.append(key, control?.value);
      })
      return this.httpClient.post(this.ADD_PODCAST_ENDPOINT,podcastFormData);
  }


}
