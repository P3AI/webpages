import {CheckboxItem} from "../components/CheckboxGroup";
// import axios from "axios";

export const DEBUG_MODE = false

export const ENDPOINT = 'https://mesdata.ucsd.edu:5001/newaccount'

export const initPreexistingConditions: CheckboxItem[] = [
    {key: 'Diabetes', text: 'Diabetes', checked: false},
    {key: 'Hypertension', text: 'Hypertension', checked: false},
    {key: 'LiverDisease', text: 'Liver Disease', checked: false},
    {key: 'LungDisease', text: 'Lung Disease', checked: false},
    {key: 'NoneOfAbove', text: 'None of above', checked: false}
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
    deviceType: string = '';
    deviceModel: string = '';
    bloodPressureMonitor: string = '';

    submit(callbackSuccess: () => void, callbackFail: () => void): void {
        const submitData = {
            first_name: this.firstName,
            last_name: this.lastName,
            password: this.password,
            cell: '+' + this.cell,
            email: this.email,
            medication: this.bloodPressureMedication,
            os: this.phoneType,
            device: this.deviceType,
            device_model: this.deviceModel,
            bp_cuff: this.bloodPressureMonitor,
            age: this.age,
            gender: this.gender,
            height: String(Number(this.heightFeet) * 12 + Number(this.heightInches)),
            weight: this.weight,
            'zip code': this.zipCode,
            conditions: this.preexistingCondition.filter(item => item.checked).map(item => item.key).join(' || ')
        }
        console.log(submitData)
        fetch(ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(response => {
                console.log(response)
                callbackSuccess()
            })
            .catch(e => {
                console.log('Network Issue: ' + e)
                callbackFail()
            })
        //axios.post(ENDPOINT, JSON.stringify(submitData))
        //    .then(callbackSuccess)
        //    .catch(callbackFail)
    }
}
