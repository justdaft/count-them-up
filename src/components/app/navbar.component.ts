// libs
import {Store} from '@ngrx/store';
import {RouterState} from 'ngrx-store-router';

// app
import {AppStoreI} from '../../frameworks/app.framework/index';
import {RouteComponent} from '../../frameworks/core.framework/index';

@RouteComponent({
    selector: 'sd-navbar',
    templateUrl: './components/app/navbar.component.html',
    styleUrls: ['./components/app/navbar.component.css']
})
export class NavbarComponent {
    // TODO: remove when {N} router supports active states
    public activeLink: any = {
        home: true,
        amy: false,
        oscar: false,
        dexter: false,
        activities: false
    };


    constructor(public store: Store<AppStoreI>) {
        store.select('router').subscribe((router: RouterState) => {
            if (!router.navigating) {
                switch (router.url) {
                    case '':
                        this.activeLink.home = true;
                        this.activeLink.about = false;
                        this.activeLink.activities = false;
                        break;
                    case '/about':
                        this.activeLink.home = false;
                        this.activeLink.activities = false;
                        this.activeLink.about = true;
                        break;
                    case '/activities':
                        this.activeLink.home = false;
                        this.activeLink.about = false;
                        this.activeLink.activities = true;
                        break;
                    case '/amy':
                        this.activeLink.home = false;
                        this.activeLink.about = false;
                        this.activeLink.activities = false;
                        this.activeLink.amy = true;
                        break;
                    case '/oscar':
                        this.activeLink.home = false;
                        this.activeLink.about = false;
                        this.activeLink.activities = false;
                        this.activeLink.oscar = true;
                        break;
                    case '/dexter':
                        this.activeLink.home = false;
                        this.activeLink.about = false;
                        this.activeLink.amy = false;
                        this.activeLink.dexter = true;
                        break;
                }
            }
        });
    }
}
