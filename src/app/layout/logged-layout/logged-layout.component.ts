import {Component, OnInit, ViewChild} from '@angular/core';
import {NbSearchService} from '@nebular/theme';

@Component({
    selector: 'ml-logged-layout',
    templateUrl: './logged-layout.component.html',
    styleUrls: ['./logged-layout.component.scss']
})
export class LoggedLayoutComponent implements OnInit {
    @ViewChild('nbSearchComponent', {static: false}) nbSearchComponent;
    public valueSearch: string;

    constructor(private searchService: NbSearchService) { }

    ngOnInit() {
        this.searchService.onSearchSubmit()
            .subscribe((data: any) => {
                this.valueSearch = data.term;
            });
    }

    public openSearch(e) {
        const classList = e.classList;

        if (classList.contains('container-search') || classList.contains('text-search')) {
            this.searchService.activateSearch('rotate-layout', 'search');
        }
    }
}
