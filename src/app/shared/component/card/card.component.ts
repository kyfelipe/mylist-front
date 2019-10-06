import {Component, Input, ViewChild} from '@angular/core';

@Component({
    selector: 'ml-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() title: string;
    @Input() img: string;
    @Input() subTitle: string;

    constructor() { }

    @ViewChild('multimediaImg', {static: false})
    set multimediaImg(element) {
        element.nativeElement.setAttribute('style', `background-image: url(${this.img})`);
    }

}
