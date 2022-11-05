import {PagesEnum} from "../App";
import {Button, Checkbox, Input, RadioGroup, SpaceBetween} from "@cloudscape-design/components";
import {CheckboxGroup, CheckboxItem} from "../components/CheckboxGroup";
import {useState} from "react";

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

export function ThirdPage(props: {trigger: ((pagesEnum: PagesEnum) => void) }): JSX.Element {

    const [takeBloodPressureMedicationValue, setTakeBloodPressureMedicationValue] = useState<string>('no')

    const [selectAppleWatchModel, setSelectAppleWatchModel] = useState(false)
    const [selectFitbitModel, setSelectFitbitModel] = useState(false)

    const [appleWatchModelList, setAppleWatchModelList] = useState<CheckboxItem[]>(initAppleWatchModelList)
    const [fitbitModelList, setFitbitModelList] = useState<CheckboxItem[]>(initFitbitModelList)

    const [bloodPressureMonitor, setBloodPressureMonitor] = useState<CheckboxItem[]>(initBloodPressureMonitorList)

    return <div className='glow-border page-container page-width-constrain'>
        <SpaceBetween size='xl' direction='vertical'>
            <h2>Questionnaire (2/2)</h2>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Are you taking blood pressure medication</div>
                </SpaceBetween>
                <RadioGroup
                    onChange={({ detail }) => setTakeBloodPressureMedicationValue(detail.value)}
                    value={takeBloodPressureMedicationValue}
                    items={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" }
                    ]}
                />
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Do you own and actively use an Apple Watch or Fitbit?</div>
                </SpaceBetween>
                <Checkbox checked={selectAppleWatchModel} onChange={({detail}) => setSelectAppleWatchModel(detail.checked)}>Apple</Checkbox>
                {
                    selectAppleWatchModel &&
                    <SpaceBetween size='s' direction='vertical' className='item-indent'>
                        <SpaceBetween size='m' direction='horizontal'>
                            <div>What is your Apple Watch model?</div>
                        </SpaceBetween>
                        <CheckboxGroup content={appleWatchModelList} setContent={setAppleWatchModelList}/>
                    </SpaceBetween>
                }
                <Checkbox checked={selectFitbitModel} onChange={({detail}) => setSelectFitbitModel(detail.checked)}>Fitbit</Checkbox>
                {
                    selectFitbitModel &&
                    <SpaceBetween size='s' direction='vertical' className='item-indent'>
                        <SpaceBetween size='m' direction='horizontal'>
                            <div>What is your Fitbit model?</div>
                        </SpaceBetween>
                        <CheckboxGroup content={fitbitModelList} setContent={setFitbitModelList}/>
                    </SpaceBetween>
                }
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Do you own and actively use a Bluetooth-enabled Omron or iHealth blood pressure monitor?</div>
                </SpaceBetween>
                <CheckboxGroup content={bloodPressureMonitor} setContent={setBloodPressureMonitor} />
            </SpaceBetween>

            <SpaceBetween size='s' direction='vertical'>
                <SpaceBetween size='m' direction='horizontal'>
                    <div>Do you own and actively use a Bluetooth-enabled Omron or iHealth blood pressure monitor?</div>
                </SpaceBetween>
                <CheckboxGroup content={bloodPressureMonitor} setContent={setBloodPressureMonitor} />
            </SpaceBetween>

            <div className='text-align-center'>
                <Button className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.Second)}}>Back</Button>
                <Button variant='primary' className='line-items-padding' onClick={()=>{props.trigger(PagesEnum.Success)}}>Next</Button>
            </div>
        </SpaceBetween>
    </div>
}
