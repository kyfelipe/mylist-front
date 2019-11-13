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
    public personBase64: string = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5OS45OTcgMjk5Ljk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk5Ljk5NyAyOTkuOTk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTE0OS45OTYsMEM2Ny4xNTcsMCwwLjAwMSw2Ny4xNTgsMC4wMDEsMTQ5Ljk5N2MwLDgyLjgzNyw2Ny4xNTYsMTUwLDE0OS45OTUsMTUwczE1MC02Ny4xNjMsMTUwLTE1MCAgICBDMjk5Ljk5Niw2Ny4xNTYsMjMyLjgzNSwwLDE0OS45OTYsMHogTTE1MC40NTMsMjIwLjc2M3YtMC4wMDJoLTAuOTE2SDg1LjQ2NWMwLTQ2Ljg1Niw0MS4xNTItNDYuODQ1LDUwLjI4NC01OS4wOTdsMS4wNDUtNS41ODcgICAgYy0xMi44My02LjUwMi0yMS44ODctMjIuMTc4LTIxLjg4Ny00MC41MTJjMC0yNC4xNTQsMTUuNzEyLTQzLjczOCwzNS4wODktNDMuNzM4YzE5LjM3NywwLDM1LjA4OSwxOS41ODQsMzUuMDg5LDQzLjczOCAgICBjMCwxOC4xNzgtOC44OTYsMzMuNzU2LTIxLjU1NSw0MC4zNjFsMS4xOSw2LjM0OWMxMC4wMTksMTEuNjU4LDQ5LjgwMiwxMi40MTgsNDkuODAyLDU4LjQ4OEgxNTAuNDUzeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPgoJPC9nPgo8L2c+PC9nPiA8L3N2Zz4=';

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
