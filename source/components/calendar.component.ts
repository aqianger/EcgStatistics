import {baseUrl} from '../config';
export default class CalendarComponent {
    constructor() { }
    static Factory() {
        return {
            controller: CalendarComponent,
            templateUrl: baseUrl+'views/components/calendar.html'
        };
    }
}