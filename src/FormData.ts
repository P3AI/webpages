import {CheckboxItem} from "./components/CheckboxGroup";

export const DEBUG_MODE = true

export const initPreexistingConditions: CheckboxItem[] = [
    {key: 'Diabetes', text: 'Diabetes', checked: false},
    {key: 'Hypertension', text: 'Hypertension', checked: false},
    {key: 'LiverDisease', text: 'Liver Disease', checked: false},
    {key: 'LungDisease', text: 'Lung Disease', checked: false}
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
    bloodPressureMedication: boolean = false;
    phoneType: ('ios' | 'android')[] = [];
    appleWatchModels: CheckboxItem[] = [];
    fitbitModels: CheckboxItem[] = [];
    bloodPressureMonitor: ('omron' | 'ihealth')[] = [];
}
