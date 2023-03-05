import { Podcaster } from './Podcaster.model';

export class Podcast{
    id!: Number;
    audio!: string;
    pic!: string;
    title!: string;
    description!: string ;
    podcaster_name!: string ;
    podcaster!: Podcaster;
}