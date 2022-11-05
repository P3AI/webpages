import {PagesEnum} from "../App";
import {Button, Input, RadioGroup, SpaceBetween} from "@cloudscape-design/components";
import {useState} from "react";
import {CheckboxGroup, CheckboxItem} from "../components/CheckboxGroup";
import {FormData} from "../FormData";

export function SecondPage(props: {trigger: ((pagesEnum: PagesEnum) => void) }): JSX.Element {

    const [firstName, setFirstName] = useState(FormData.instance.firstName)
    const [lastName, setLastName] = useState(FormData.instance.lastName)
    const [genderValue, setGenderValue] = useState(FormData.instance.gender)
    const [ageValue, setAgeValue] = useState<string>(FormData.instance.age)
    const [heightFeetValue, setHeightFeetValue] = useState<string>(FormData.instance.heightFeet)
    const [heightInchesValue, setHeightInchesValue] = useState<string>(FormData.instance.heightInches)
    const [zipCodeValue, setZipCodeValue] = useState<string>(FormData.instance.zipCode)
    const [preexistingConditionsValue, setPreexistingConditionsValue] = useState<CheckboxItem[]>(FormData.instance.preexistingCondition)

    return <div className='glow-border page-container page-width-constrain'>
        <SpaceBetween size='xl' direction='vertical'>
            <h2 className='line-align-center'>Questionnaire (1/2)</h2>
            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Name</div>
                </SpaceBetween>
                <SpaceBetween size='m' direction='horizontal'>
                    <Input onChange={({detail}) => {
                                setFirstName(detail.value)
                                FormData.instance.firstName = detail.value
                            }}
                           value={firstName}
                           placeholder="First Name"
                    ></Input>
                    <Input onChange={({detail}) => {
                                setLastName(detail.value)
                                FormData.instance.lastName = detail.value
                            }}
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
                />
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please select any preexisting conditions you have</div>
                </SpaceBetween>
                <CheckboxGroup content={preexistingConditionsValue} setContent={setPreexistingConditionsValue}></CheckboxGroup>
            </SpaceBetween>

            <div className='line-align-center'>
                <Button className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.First)}}>Back</Button>
                <Button variant='primary' className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.Third)}}>Next</Button>
            </div>
        </SpaceBetween>
    </div>
}
