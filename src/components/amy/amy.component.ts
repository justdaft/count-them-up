// libs
import {Store} from '@ngrx/store';
import {KidStoreService} from '../../frameworks/app.framework/index';

import {BaseComponent} from '../../frameworks/core.framework/index';
import {OnInit} from 'angular2/core';

import {MdButton} from '../../../node_modules/@angular2-material/button/button';
import {MD_CARD_DIRECTIVES} from '../../../node_modules/@angular2-material/card/card';

import { Kid} from './../../frameworks/app.framework/models/models';
// import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from 'angular2/common';


@BaseComponent({
    selector: 'sd-amy',
    templateUrl: './components/amy/amy.component.html',
    styleUrls: ['./components/amy/amy.component.css'],
    directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class AmyComponent implements OnInit {
    colors = ['red', 'blue', 'green', 'orange', 'pink', 'gold', 'purple', 'rose'];
    days: string[] = moment.weekdays('ddd'); // moment(date, 'DD-MM-YYYY').format('Do');
    // cardDetails: CardDetail = {
    //     cardTitle: 'Amy',
    //     // cardSubtitle: 'My little princess',
    //     // cardContent: 'Amy had a little lamb'
    // };
    // activities: Array<any> = ['InOwnBed', 'TidedToys', 'LayedTable', 'WasHelpfull'];
    results: any;
    kid: Kid =
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
    };

    constructor(private store: Store<any>, public kidStoreService: KidStoreService) {
console.log(this.kidStoreService.kids);
    }

    addDay(activityType: any) {
        // this.results = _.map(this.kid.activities, function(x: any) {
        //     let yes = _.filter(x.data, function(obj: any) { return obj.result; });
        //     let tempObj = {
        //         type: x.type,
        //         count: yes.length
        //     };
        //     console.log('type: ', x.type, ' data: ', yes.length);

        let activity = {
            date: Date.now(),
            type: activityType
        };
        console.log(activity);
        return this.kid.activities.push(activity);
    }

    // count(item: any) {
    //     let result = {
    //         type: item.type,
    //         count: _size()
    //     }
    //     return result;
    // }

    ngOnInit() {
        this.results = _.map(this.kid.activities, function(x: any) {
            let yes = _.filter(x.data, function(obj: any) { return obj.result; });
            let tempObj = {
                type: x.type,
                count: yes.length
            };
            console.log('type: ', x.type, ' data: ', yes.length);
            return tempObj;
        });




        console.log(this.results);
        // let results1 = _.filter(this.kid.activities, 'type');
        // let results2 = _.map(results1, function(params: any) {
        //     //

        // });
        // let xxx = _.map(this.kid.activities, (x: any) => {
        //     obj = {
        //         type: x.type,
        //         count: x.data.length
        //     };
        //     console.log(xxx);
        // });
        //    }));
        //   let results = console.log(_.filter(this.kid.acc, 'data-model_id'));
        // console.log(results1);
        // console.log(results2);
    }

}
