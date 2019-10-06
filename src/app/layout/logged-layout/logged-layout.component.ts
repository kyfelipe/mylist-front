import {Component, OnInit, ViewChild} from '@angular/core';
import {NbSearchService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
    selector: 'ml-logged-layout',
    templateUrl: './logged-layout.component.html',
    styleUrls: ['./logged-layout.component.scss']
})
export class LoggedLayoutComponent implements OnInit {
    @ViewChild('nbSearchComponent', {static: false}) nbSearchComponent;
    public valueSearch: string;

    constructor(private searchService: NbSearchService, private router: Router) { }

    ngOnInit() {
        this.searchService.onSearchSubmit()
            .subscribe((data: any) => {
                this.valueSearch = data.term;
                this.router.navigate(['/busca'], {queryParams: { q: data.term }});
            });
    }

    public openSearch(e) {
        const classList = e.classList;

        if (classList.contains('container-search') || classList.contains('text-search')) {
            this.searchService.activateSearch('rotate-layout', 'search');
        }
    }
}
