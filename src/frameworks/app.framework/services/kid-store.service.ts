import {Injectable} from 'angular2/core';
// import {Kid} from './../models/models';

// libs
import {Store, Reducer, Action} from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

// app
import {Analytics, AnalyticsService} from '../../analytics.framework/index';

// analytics
const CATEGORY: string = 'KidStore';

const initialState: Array<any> = [
    {
        id: 101,
        name: 'Amy Westbury',
        age: 4,
        activities: [
            {
                type: 'WAS_HELPFULL',
                data: [
                    {
                        date: Date.now(),
                        result: false
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    }
                ]
            },
            {
                type: 'IN_OWN_BED',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    }
                ]
            },
            {
                type: 'TIDY_TOYS',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    }
                ]
            },
            {
                type: 'LAYED_TABLE',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    },
                    {
                        date: Date.now(),
                        result: true
                    }
                ]
            }
        ]
    },
    {
        id: 202,
        name: 'Oscar Westbury',
        age: 4,
        activities: [
            {
                type: 'WAS_HELPFULL',
                data: [
                    {
                        date: Date.now(),
                        result: false
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    }
                ]
            },
            {
                type: 'IN_OWN_BED',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    }
                ]
            },
            {
                type: 'TIDY_TOYS',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    }
                ]
            },
            {
                type: 'LAYED_TABLE',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    },
                    {
                        date: Date.now(),
                        result: true
                    }
                ]
            }
        ]
    },
    {
        id: 303,
        name: 'Dexter Westbury',
        age: 7,
        activities: [
            {
                type: 'WAS_HELPFULL',
                data: [
                    {
                        date: Date.now(),
                        result: false
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    }
                ]
            },
            {
                type: 'IN_OWN_BED',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    }
                ]
            },
            {
                type: 'TIDY_TOYS',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    },
                    {
                        date: Date.now(),
                        result: false
                    }
                ]
            },
            {
                type: 'LAYED_TABLE',
                data: [
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: true
                    },
                    {
                        date: Date.now(),
                        result: false
                    },
                    {
                        date: Date.now(),
                        result: true
                    }
                ]
            }
        ]
    }
];

export const KID_STORE_ACTIONS: any = {
    KID_ADDED: `[${CATEGORY}] KID_ADDED`
};

export const kidStoreReducer: Reducer<any> = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case KID_STORE_ACTIONS.KID_ADDED:
            return [...state, action.payload];
        default:
            return state;
    }
};

@Injectable()
export class KidStoreService extends Analytics {
    public kids: Observable<any>;

    constructor(public analytics: AnalyticsService, private store: Store<any>) {
        super(analytics);
        this.category = CATEGORY;

        this.kids = store.select('kids');

    };
    
    add(kid: any): void {
        this.track(KID_STORE_ACTIONS.KID_ADDED, { label: kid });
        this.store.dispatch({ type: KID_STORE_ACTIONS.KID_ADDED, payload: kid });
    }
}
