import {Injectable} from 'angular2/core';
import {Kid, Activity} from './../models/models';

// libs
import {Store, Reducer, Action} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

// app
import {Analytics, AnalyticsService} from '../../analytics.framework/index';

// analytics
const CATEGORY: string = 'ActivityStore';


const initialState: Array<Kid> = [
    {
        id: 101,
        name: 'Dexter',
        data: [{
            type: 'InOwnBed',
            date: Date.now(),
            result: true
        }]
    }
];


export const ACTIVITY_STORE_ACTIONS: any = {
    KID_ADDED: `[${CATEGORY}] KID_ADDED`
};

export const ActivityStoreReducer: Reducer<any> = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case ACTIVITY_STORE_ACTIONS.KID_ADDED:
            return [...state, action.payload];
        default:
            return state;
    }
};

@Injectable()
export class NameListService extends Analytics {
        public activitys: Observable<any>;

    constructor(public analytics: AnalyticsService, private store: Store<any>) {
        super(analytics);
                this.category = CATEGORY;

        this.activitys = store.select('activitys');

    }
}
