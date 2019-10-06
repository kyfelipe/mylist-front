import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'ml-media',
    templateUrl: './media.component.html',
    styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((p) => console.log(p.id));
    }

}
