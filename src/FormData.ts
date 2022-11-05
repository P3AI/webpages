export enum PreexistingConditionType {
    Diabetes,
    Hypertension,
    Liver ,
    Disease,
    LungDisease
}

export enum AppleWatchModel {
    Series7= "Series 7",
    Series6 = "Series 6",
    SeriesSE = "Series SE",
    Series5 = "Series 5",
    Series4 = "Series 4",
    Series3OrBelow = "Series 3 or below"
}

export enum FitbitModel {
    Inspire2 = "Inspire 2",
    Inspire3 = "Inspire 3",
    Charge4 = "Charge 4",
    Charge5 = "Charge 5",
    Sense = "Sense",
    Sense2 = "Sense 2",
    Versa3 = "Versa 3",
    Versa4 = "Versa 4",
    Luxe = "Luxe",
    Other = "other"
}

export class FormData {

    static instance: FormData = new FormData();

    email: string | undefined;
    cell: string | undefined;
    password: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    gender: 'male' | 'female' | 'preferNotToSay' | undefined;
    age: number | undefined;
    heightFeet: number | undefined;
    heightInch: number | undefined;
    weight: number | undefined;
    zipCode: number | undefined;
    preexistingCondition: PreexistingConditionType[] = [];
    bloodPressureMedication: boolean = false;
    phoneType: ('ios' | 'android')[] = [];
    appleWatchModels: AppleWatchModel[] = [];
    fitbitModels: FitbitModel[] = [];
    bloodPressureMonitor: ('omron' | 'ihealth')[] = [];
}
