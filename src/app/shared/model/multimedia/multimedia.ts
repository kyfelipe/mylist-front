import {Font} from '../font/font.model';
import {Aired} from '../aired/Aired';
import {Related} from '../related/Related';

export class Multimedia {
    id: string;
    title: string;
    titleAlternative: string[];
    imageUrl: string;
    type: string;
    source: string;
    episodes: string;
    aired: Aired;
    duration: string;
    rating: string;
    premiered: string;
    related: Related;
    producer: string[];
    licensor: string[];
    studio: string[];
    genre: string[];
    font: Font;
}
