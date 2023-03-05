import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Podcast } from '../model/Podcast.model';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private PODCAST_ENDPOINT = "podcast-service/podcasts";
  constructor(private httpClient:HttpClient) { }


  addPodcast(pocastForm:FormGroup){
      let podcastFormData = new FormData();
      Object.keys(pocastForm.controls).forEach(key => {
        const control = pocastForm.get(key);
        console.log(control?.value)
        podcastFormData.append(key, control?.value);
      })
      return this.httpClient.post(this.PODCAST_ENDPOINT,podcastFormData);
  }


  getPodcasts(page:Number, size:Number):Observable<Podcast[]>{
    return this.httpClient.get<Podcast[]>(`${this.PODCAST_ENDPOINT}?page=${page}&size=${size}`)
  }

  getSinglePodcast(id:Number):Observable<Podcast>{
    return this.httpClient.get<Podcast>(`${this.PODCAST_ENDPOINT}/${id}`)
  }

}
