import {PagesEnum} from "../App";
import {Button, Input, RadioGroup, SpaceBetween} from "@cloudscape-design/components";
import {useState} from "react";
import {CheckboxGroup, CheckboxGroupIsEmpty, CheckboxItem} from "../components/CheckboxGroup";
import {DEBUG_MODE, FormData} from "../data/FormData";

export function QuestionnairePage1(props: {trigger: ((pagesEnum: PagesEnum) => void) }): JSX.Element {

    const [firstName, setFirstName] = useState(FormData.instance.firstName)
    const [lastName, setLastName] = useState(FormData.instance.lastName)
    const [genderValue, setGenderValue] = useState(FormData.instance.gender)
    const [ageValue, setAgeValue] = useState<string>(FormData.instance.age)
    const [heightFeetValue, setHeightFeetValue] = useState<string>(FormData.instance.heightFeet)
    const [heightInchesValue, setHeightInchesValue] = useState<string>(FormData.instance.heightInches)
    const [weightValue, setWeightValue] = useState<string>(FormData.instance.weight)
    const [zipCodeValue, setZipCodeValue] = useState<string>(FormData.instance.zipCode)
    const [preexistingConditionsValue, setPreexistingConditionsValue] = useState<CheckboxItem[]>(FormData.instance.preexistingCondition)

    const [firstLoaded, setFirstLoaded] = useState<boolean>(true)

    function submit(): void {
        setFirstLoaded(false)
        if(DEBUG_MODE || (firstName.length > 0 && lastName.length > 0 && genderValue.length > 0 && ageValue.length > 0
            && heightFeetValue.length > 0 && heightInchesValue.length > 0 && zipCodeValue.length > 0 && !CheckboxGroupIsEmpty(preexistingConditionsValue)))
        {
            props.trigger(PagesEnum.Third)
        }
    }

    return <div className='glow-border page-container page-width-constrain'>
        <SpaceBetween size='xl' direction='vertical'>

            <h2 className='line-align-center'>Create an account</h2>

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
                {
                    !(firstLoaded || (firstName.length > 0 && lastName.length > 0)) && <p className='tip-text'>Please enter your full name.</p>
                }
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>What is your Gender?</div>
                </SpaceBetween>
                <RadioGroup
                    onChange={({ detail }) => {
                        setGenderValue(detail.value)
                        FormData.instance.gender = detail.value
                    }}
                    value={genderValue}
                    items={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "preferNotToSay", label: "Prefer not to say" }
                    ]}
                />
                {
                    !(firstLoaded || genderValue.length > 0) && <p className='tip-text'>Please select your gender.</p>
                }
            </SpaceBetween>

            {/*age*/}
            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please select your age (0-100)</div>
                </SpaceBetween>
                <Input
                    onChange={({ detail }) => {
                        if(isNaN(Number(detail.value))) return
                        const ageNum: number = Number(detail.value)
                        if(ageNum>=0 && ageNum<=100) {
                            setAgeValue(detail.value)
                            FormData.instance.age = detail.value
                        }
                    }}
                    value={ageValue}
                    type="number"
                    placeholder='Age'
                />
                {
                    !(firstLoaded || ageValue.length > 0) && <p className='tip-text'>Please enter your age.</p>
                }
            </SpaceBetween>

            {/*height*/}
            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please select your height</div>
                </SpaceBetween>
                <SpaceBetween size='m' direction='horizontal'>
                    <Input
                        onChange={({ detail }) => {
                            if(isNaN(Number(detail.value))) return
                            const ageNum: number = Number(detail.value)
                            if(ageNum>=0 && ageNum<=7) {
                                setHeightFeetValue(detail.value)
                                FormData.instance.heightFeet = detail.value
                            }
                        }}
                        value={heightFeetValue}
                        type="number"
                        placeholder='Feet'
                    />
                    <Input
                        onChange={({ detail }) => {
                            if(isNaN(Number(detail.value))) return
                            const ageNum: number = Number(detail.value)
                            if(ageNum>=0 && ageNum<=11) {
                                setHeightInchesValue(detail.value)
                                FormData.instance.heightInches = detail.value
                            }
                        }}
                        value={heightInchesValue}
                        type="number"
                        placeholder='Inches'
                    />
                </SpaceBetween>
                {
                    !(firstLoaded || (heightFeetValue.length > 0 && heightInchesValue.length > 0)) &&
                    <p className='tip-text'>Please enter your height.</p>
                }
            </SpaceBetween>

            {/*weight*/}
            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please select your weight</div>
                </SpaceBetween>
                <SpaceBetween size='m' direction='horizontal'>
                    <Input
                        onChange={({ detail }) => {
                            if(isNaN(Number(detail.value))) return
                            const ageNum: number = Number(detail.value)
                            if(ageNum>=0 && ageNum<=400) {
                                setWeightValue(detail.value)
                                FormData.instance.weight = detail.value
                            }
                        }}
                        value={weightValue}
                        type="number"
                        placeholder='LB'
                    />
                </SpaceBetween>
                {
                    !(firstLoaded || weightValue.length > 0) &&
                    <p className='tip-text'>Please enter your weight.</p>
                }
            </SpaceBetween>

            {/*zip code*/}
            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please enter your zip code</div>
                </SpaceBetween>
                <Input
                    onChange={({ detail }) => {
                        setZipCodeValue(detail.value)
                        FormData.instance.zipCode = detail.value
                    }}
                    value={zipCodeValue}
                />
                {
                    !(firstLoaded || zipCodeValue.length > 0) && <p className='tip-text'>Please enter your zip code.</p>
                }
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Please select any preexisting conditions you have</div>
                </SpaceBetween>
                <CheckboxGroup content={preexistingConditionsValue} setContent={
                    (items: CheckboxItem[]) => {
                        setPreexistingConditionsValue(items)
                        FormData.instance.preexistingCondition = items
                    }
                }></CheckboxGroup>
                {
                    !(firstLoaded || !CheckboxGroupIsEmpty(preexistingConditionsValue)) && <p className='tip-text'>Please select preexisting conditions.</p>
                }
            </SpaceBetween>

            <div className='line-align-center'>
                <Button className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.First)}}>Back</Button>
                <Button variant='primary' className='line-items-padding' onClick={submit}>Next</Button>
            </div>
        </SpaceBetween>
    </div>
}
