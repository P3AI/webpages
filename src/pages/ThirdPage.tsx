import {PagesEnum} from "../App";
import {Button, Checkbox, RadioGroup, SpaceBetween} from "@cloudscape-design/components";
import {CheckboxGroup, CheckboxGroupIsEmpty, CheckboxItem} from "../components/CheckboxGroup";
import {useState} from "react";
import {FormData} from "../FormData";

export function ThirdPage(props: {trigger: ((pagesEnum: PagesEnum) => void) }): JSX.Element {

    const [takeBloodPressureMedicationValue, setTakeBloodPressureMedicationValue] = useState<string>(FormData.instance.bloodPressureMedication)

    const [phoneModel, setPhoneModel] = useState<string>(FormData.instance.phoneType)

    const [selectAppleWatchModel, setSelectAppleWatchModel] = useState(false)
    const [selectFitbitModel, setSelectFitbitModel] = useState(false)

    const [appleWatchModelList, setAppleWatchModelList] = useState<CheckboxItem[]>(FormData.instance.appleWatchModels)
    const [fitbitModelList, setFitbitModelList] = useState<CheckboxItem[]>(FormData.instance.fitbitModels)

    const [bloodPressureMonitor, setBloodPressureMonitor] = useState<CheckboxItem[]>(FormData.instance.bloodPressureMonitor)

    const [firstLoaded, setFirstLoaded] = useState<boolean>(true)

    function submit() {
        setFirstLoaded(false)
        if(takeBloodPressureMedicationValue.length > 0 && phoneModel.length > 0) {
            console.log(FormData.instance)
            props.trigger(PagesEnum.Success)
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
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" }
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
                                {value: 'ios', label: 'Apple'},
                                {value: 'android', label: 'Android'}
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
                <Checkbox checked={selectAppleWatchModel} onChange={({detail}) => setSelectAppleWatchModel(detail.checked)}>Apple Watch</Checkbox>
                {
                    selectAppleWatchModel &&
                    <SpaceBetween size='s' direction='vertical' className='item-indent'>
                        <SpaceBetween size='m' direction='horizontal'>
                            <div>What is your Apple Watch model?</div>
                        </SpaceBetween>
                        <CheckboxGroup content={appleWatchModelList} setContent={
                            (items: CheckboxItem[]) => {
                                setAppleWatchModelList(items)
                                FormData.instance.appleWatchModels = items
                            }
                        }/>
                    </SpaceBetween>
                }
                <Checkbox checked={selectFitbitModel} onChange={({detail}) => setSelectFitbitModel(detail.checked)}>Fitbit</Checkbox>
                {
                    selectFitbitModel &&
                    <SpaceBetween size='s' direction='vertical' className='item-indent'>
                        <SpaceBetween size='m' direction='horizontal'>
                            <div>What is your Fitbit model?</div>
                        </SpaceBetween>
                        <CheckboxGroup content={fitbitModelList} setContent={
                            (items: CheckboxItem[]) => {
                                setFitbitModelList(items)
                                FormData.instance.fitbitModels = items
                            }
                        }/>
                    </SpaceBetween>
                }
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Do you own and actively use a Bluetooth-enabled Omron or iHealth blood pressure monitor?</div>
                </SpaceBetween>
                <CheckboxGroup content={bloodPressureMonitor} setContent={
                    (items: CheckboxItem[]) => {
                        setBloodPressureMonitor(items)
                        FormData.instance.bloodPressureMonitor = items
                    }
                } />
            </SpaceBetween>

            <div className='line-align-center'>
                <Button className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.Second)}}>Back</Button>
                <Button variant='primary' className='line-items-padding' onClick={submit}>Submit</Button>
            </div>
        </SpaceBetween>
    </div>
}
