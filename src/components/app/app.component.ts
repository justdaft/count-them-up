// angular
import {ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

// app
import {NameListService} from '../../frameworks/app.framework/index';
import {KidStoreService} from '../../frameworks/app.framework/index';
import {AnalyticsService} from '../../frameworks/analytics.framework/index';
import {RouteComponent, PlatformDirective} from '../../frameworks/core.framework/index';
import {LangSwitcherComponent} from '../../frameworks/i18n.framework/index';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../home/home.component';
// import {AboutComponent} from '../about/about.component';
import {AmyComponent} from '../amy/amy.component';
import {OscarComponent} from '../oscar/oscar.component';
import {DexterComponent} from '../dexter/dexter.component';
import {ActivitiesComponent} from '../activities/activities.component';

@RouteComponent({
    selector: 'sd-app',
    viewProviders: [NameListService, KidStoreService],
    templateUrl: './components/app/app.component.html',
    directives: [LangSwitcherComponent, NavbarComponent, ToolbarComponent, PlatformDirective],
    changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
@RouteConfig([
    { path: '/', component: HomeComponent, as: 'Home' },
    { path: '/amy', component: AmyComponent, as: 'Amy' },
    { path: '/oscar', component: OscarComponent, as: 'Oscar' },
    { path: '/dexter', component: DexterComponent, as: 'Dexter' },
    { path: '/activities', component: ActivitiesComponent, as: 'Activities' }
    // { path: '/about', component: AboutComponent, as: 'About' }

])
export class AppComponent {
    constructor(public analytics: AnalyticsService) {

    }
}
