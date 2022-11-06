import {CheckboxItem} from "./components/CheckboxGroup";

export const DEBUG_MODE = false

export const initPreexistingConditions: CheckboxItem[] = [
    {key: 'Diabetes', text: 'Diabetes', checked: false},
    {key: 'Hypertension', text: 'Hypertension', checked: false},
    {key: 'LiverDisease', text: 'Liver Disease', checked: false},
    {key: 'LungDisease', text: 'Lung Disease', checked: false},
    {key: 'NoneOfAbove', text: 'None of above', checked: false}
]

const initBloodPressureMonitorList: CheckboxItem[] = [
    {key: 'omron', text: 'Omron', checked: false},
    {key: 'ihealth', text: 'iHealth', checked: false}
]

const initAppleWatchModelList: CheckboxItem[] = [
    {key: 'series7', text: 'Series 7', checked: false},
    {key: 'series6', text: 'Series 6', checked: false},
    {key: 'seriesSE', text: 'Series SE', checked: false},
    {key: 'series5', text: 'Series 5', checked: false},
    {key: 'series4', text: 'Series 4', checked: false},
    {key: 'series3-', text: 'Series 3 and below', checked: false}
]

const initFitbitModelList: CheckboxItem[] = [
    {key: 'inspire2', text: 'Inspire 2', checked: false},
    {key: 'inspire3', text: 'Inspire 3', checked: false},
    {key: 'charge4', text: 'Charge 4', checked: false},
    {key: 'charge5', text: 'Charge 5', checked: false},
    {key: 'sense', text: 'Sense', checked: false},
    {key: 'sense2', text: 'Sense 2', checked: false},
    {key: 'versa2', text: 'Versa 2', checked: false},
    {key: 'versa3', text: 'Versa 3', checked: false},
    {key: 'versa4', text: 'Versa 4', checked: false},
    {key: 'luxe', text: 'Luxe', checked: false},
    {key: 'other', text: 'Other', checked: false}
]

export class FormData {

    static instance: FormData = new FormData();

    email: string = '';
    cell: string = '';
    password: string = '';

    firstName: string = '';
    lastName: string = '';
    gender: string = '';
    age: string = '';
    heightFeet: string = '';
    heightInches: string = '';
    weight: string = '';
    zipCode: string = '';
    preexistingCondition: CheckboxItem[] = initPreexistingConditions;

    bloodPressureMedication: string = '';
    phoneType: string = '';
    appleWatchModels: CheckboxItem[] = initAppleWatchModelList;
    fitbitModels: CheckboxItem[] = initFitbitModelList;
    bloodPressureMonitor: CheckboxItem[] = initBloodPressureMonitorList;
}
