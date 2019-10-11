import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Multimedia} from '../../shared/model/multimedia/multimedia';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'ml-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
    public multimedia: Multimedia;

    constructor(private route: ActivatedRoute, private title: Title) { }

    ngOnInit() {
        this.multimedia = this.route.snapshot.data.multimedia;
        this.title.setTitle('MyList | ' + this.multimedia.title);
    }

}
