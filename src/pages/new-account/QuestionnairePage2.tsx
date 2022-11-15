import {PagesEnum} from "../../App";
import {Button, Checkbox, RadioGroup, SpaceBetween, Spinner} from "@cloudscape-design/components";
import {useState} from "react";
import {FormData} from "../../data/FormData";

export function QuestionnairePage2(props: {trigger: ((pagesEnum: PagesEnum) => void) }): JSX.Element {

    const [takeBloodPressureMedicationValue, setTakeBloodPressureMedicationValue] = useState<string>(FormData.instance.bloodPressureMedication)

    const [phoneModel, setPhoneModel] = useState<string>(FormData.instance.phoneType)

    const [selectAppleWatchModel, setSelectAppleWatchModel] = useState(FormData.instance.deviceType === 'Apple')
    const [selectFitbitModel, setSelectFitbitModel] = useState(FormData.instance.deviceType === 'Fitbit')

    const [deviceModel,setDeviceModel] = useState<string>(FormData.instance.deviceModel)

    const [bloodPressureMonitor, setBloodPressureMonitor] = useState<string>(FormData.instance.bloodPressureMonitor)

    const [firstLoaded, setFirstLoaded] = useState<boolean>(true)

    const [submitWaiting, setSubmitWaiting] = useState<boolean>(false)
    const [submitFailed, setSubmitFailed] = useState<boolean>(false)

    function submit() {
        setFirstLoaded(false)
        if(takeBloodPressureMedicationValue.length > 0 && phoneModel.length > 0) {
            setSubmitWaiting(true)
            const whenSuccess = (): void => {
                props.trigger(PagesEnum.Success)
            }
            const whenFail = (): void => {
                setSubmitWaiting(false)
                setSubmitFailed(true)
            }
            FormData.instance.submit(whenSuccess, whenFail)
        }
    }

    return <div className='glow-border page-container page-width-constrain'>
        <SpaceBetween size='xl' direction='vertical'>
            <h2 className='line-align-center'>Create an account</h2>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Are you taking blood pressure medication</div>
                </SpaceBetween>
                <RadioGroup
                    onChange={({ detail }) => {
                        setTakeBloodPressureMedicationValue(detail.value)
                        FormData.instance.bloodPressureMedication = detail.value
                    }}
                    value={takeBloodPressureMedicationValue}
                    items={[
                        { value: "1", label: "Yes" },
                        { value: "0", label: "No" }
                    ]}
                />
                {
                    !(firstLoaded || takeBloodPressureMedicationValue.length > 0) && <p className='tip-text'>Please select Yes or No.</p>
                }
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Do you have an Apple or Android phone?</div>
                </SpaceBetween>
                <RadioGroup value={phoneModel}
                            onChange={({detail}) => {
                                setPhoneModel(detail.value)
                                FormData.instance.phoneType = detail.value
                            }}
                            items={[
                                {value: 'Apple', label: 'Apple'},
                                {value: 'Android', label: 'Android'}
                            ]}
                />
                {
                    !(firstLoaded || phoneModel.length > 0) && <p className='tip-text'>Please select your phone model.</p>
                }
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Do you own and actively use an Apple Watch or Fitbit?</div>
                </SpaceBetween>
                <Checkbox checked={selectAppleWatchModel} onChange={({detail}) => {
                    setSelectAppleWatchModel(detail.checked)
                    setSelectFitbitModel(false)
                    setDeviceModel('')
                    FormData.instance.deviceType = 'Apple Watch'
                }}>Apple Watch</Checkbox>
                {
                    selectAppleWatchModel &&
                    <SpaceBetween size='s' direction='vertical' className='item-indent'>
                        <SpaceBetween size='m' direction='horizontal'>
                            <div>What is your Apple Watch model?</div>
                        </SpaceBetween>
                        <RadioGroup value={deviceModel}
                                    onChange={({detail}) => {
                                        setDeviceModel(detail.value)
                                        FormData.instance.deviceModel = detail.value
                                    }}
                                    items={[
                                        {value: 'Series 7', label: 'Series 7'},
                                        {value: 'Series 6', label: 'Series 6'},
                                        {value: 'Series SE', label: 'Series SE'},
                                        {value: 'Series 5', label: 'Series 5'},
                                        {value: 'Series 4', label: 'Series 4'},
                                        {value: 'Series 3 or below', label: 'Series 3 or below'}
                                    ]}
                        />
                    </SpaceBetween>
                }
                <Checkbox checked={selectFitbitModel} onChange={({detail}) => {
                    setSelectFitbitModel(detail.checked)
                    setSelectAppleWatchModel(false)
                    setDeviceModel('')
                    FormData.instance.deviceType = 'Fitbit'
                }}>Fitbit</Checkbox>
                {
                    selectFitbitModel &&
                    <SpaceBetween size='s' direction='vertical' className='item-indent'>
                        <SpaceBetween size='m' direction='horizontal'>
                            <div>What is your Fitbit model?</div>
                        </SpaceBetween>

                        <RadioGroup value={deviceModel}
                                    onChange={({detail}) => {
                                        setDeviceModel(detail.value)
                                        FormData.instance.deviceModel = detail.value
                                    }}
                                    items={[
                                        {value: 'Inspire 2', label: 'Inspire 2'},
                                        {value: 'Inspire 3', label: 'Inspire 3'},
                                        {value: 'Charge 4', label: 'Charge 4'},
                                        {value: 'Charge 5', label: 'Charge 5'},
                                        {value: 'Sense', label: 'Sense'},
                                        {value: 'Sense 2', label: 'Sense 2'},
                                        {value: 'Versa 2', label: 'Versa 2'},
                                        {value: 'Versa 3', label: 'Versa 3'},
                                        {value: 'Versa 4', label: 'Versa 4'},
                                        {value: 'Luxe', label: 'Luxe'},
                                        {value: 'Other', label: 'Other'}
                                    ]}
                        />
                    </SpaceBetween>
                }
                {
                    !(firstLoaded || deviceModel.length > 0) && <p className='tip-text'>Please select your device model.</p>
                }
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Do you own a Bluetooth-enabled Omron or iHealth blood pressure monitor?</div>
                </SpaceBetween>
                <RadioGroup value={bloodPressureMonitor}
                            onChange={({detail}) => {
                                setBloodPressureMonitor(detail.value)
                                FormData.instance.bloodPressureMonitor = detail.value
                            }}
                            items={[
                                {value: 'Omron', label: 'Omron'},
                                {value: 'iHealth', label: 'iHealth'}
                            ]} />
                {
                    !(firstLoaded || bloodPressureMonitor.length > 0) && <p className='tip-text'>Please select your blood pressure monitor.</p>
                }
            </SpaceBetween>

            <div className='line-align-center'>
                <Button className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.Second)}}>Back</Button>
                <Button variant='primary' className='line-items-padding' onClick={submit}>
                    {
                        submitWaiting && <Spinner />
                    }
                    Submit
                </Button>
            </div>

            {
                submitFailed && <p className='tip-text'>Submission Failed.</p>
            }
        </SpaceBetween>
    </div>
}
