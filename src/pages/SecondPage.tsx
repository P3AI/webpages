import {PagesEnum} from "../App";
import {Button, Input, RadioGroup, SpaceBetween} from "@cloudscape-design/components";
import {useState} from "react";
import {CheckboxGroup, CheckboxItem} from "../components/CheckboxGroup";

const initPreexistingConditions: CheckboxItem[] = [
    {key: 'Diabetes', text: 'Diabetes', checked: false},
    {key: 'Hypertension', text: 'Hypertension', checked: false},
    {key: 'LiverDisease', text: 'Liver Disease', checked: false},
    {key: 'LungDisease', text: 'Lung Disease', checked: false}
]

export function SecondPage(props: {trigger: ((pagesEnum: PagesEnum) => void) }): JSX.Element {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [genderValue, setGenderValue] = useState('')
    const [ageValue, setAgeValue] = useState<string>('')
    const [heightFeetValue, setHeightFeetValue] = useState<string>('')
    const [heightInchesValue, setHeightInchesValue] = useState<string>('')
    const [zipCodeValue, setZipCodeValue] = useState<string>('')
    const [preexistingConditionsValue, setPreexistingConditionsValue] = useState<CheckboxItem[]>(initPreexistingConditions)

    return <div className='glow-border page-container page-width-constrain'>
        <SpaceBetween size='xl' direction='vertical'>
            <h2>Questionnaire (1/2)</h2>
            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Name</div>
                </SpaceBetween>
                <SpaceBetween size='m' direction='horizontal'>
                    <Input onChange={({detail}) => setFirstName(detail.value)}
                           value={firstName}
                           placeholder="First Name"
                    ></Input>
                    <Input onChange={({detail}) => setLastName(detail.value)}
                           value={lastName}
                           placeholder="Last Name"
                    ></Input>
                </SpaceBetween>
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>What is your Gender?</div>
                </SpaceBetween>
                <RadioGroup
                    onChange={({ detail }) => setGenderValue(detail.value)}
                    value={genderValue}
                    items={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "preferNotToSay", label: "Prefer not to say" }
                    ]}
                />
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please select your age (0-100)</div>
                </SpaceBetween>
                <Input
                    onChange={({ detail }) => {
                        if(isNaN(Number(detail.value))) return
                        const ageNum: number = Number(detail.value)
                        if(ageNum>=0 && ageNum<=100) setAgeValue(detail.value)
                    }}
                    value={ageValue}
                    type="number"
                    placeholder='Age'
                />
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please select your height</div>
                </SpaceBetween>
                <SpaceBetween size='m' direction='horizontal'>
                    <Input
                        onChange={({ detail }) => {
                            if(isNaN(Number(detail.value))) return
                            const ageNum: number = Number(detail.value)
                            if(ageNum>=0 && ageNum<=7) setHeightFeetValue(detail.value)
                        }}
                        value={heightFeetValue}
                        type="number"
                        placeholder='Feet'
                    />
                    <Input
                        onChange={({ detail }) => {
                            if(isNaN(Number(detail.value))) return
                            const ageNum: number = Number(detail.value)
                            if(ageNum>=0 && ageNum<=11) setHeightInchesValue(detail.value)
                        }}
                        value={heightInchesValue}
                        type="number"
                        placeholder='Inches'
                    />
                </SpaceBetween>
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please enter your zip code</div>
                </SpaceBetween>
                <Input
                    onChange={({ detail }) => setZipCodeValue(detail.value)}
                    value={zipCodeValue}
                    type="number"
                />
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please select any preexisting conditions you have</div>
                </SpaceBetween>
                <CheckboxGroup content={preexistingConditionsValue} setContent={setPreexistingConditionsValue}></CheckboxGroup>
            </SpaceBetween>

            <div className='text-align-center'>
                <Button className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.First)}}>Back</Button>
                <Button variant='primary' className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.Third)}}>Next</Button>
            </div>
        </SpaceBetween>
    </div>
}