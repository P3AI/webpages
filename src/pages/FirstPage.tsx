import {PagesEnum} from "../App";
import {Button, Checkbox, Input, SpaceBetween, Textarea} from "@cloudscape-design/components";
import "./__pages.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import cipraLogo from '../res/cipra_logo.png'
import {useState} from "react";
import {DEBUG_MODE, FormData} from "../FormData";
import {terms} from "../res/terms";

const termAgreement: JSX.Element = terms

export function FirstPage(props: {trigger: ((pagesEnum: PagesEnum) => void) }): JSX.Element {

    const [emailValue, setEmailValue] = useState<string>(FormData.instance.email)
    const [phoneValue, setPhoneValue] = useState(FormData.instance.cell)
    const [passwordValue, setPasswordValue] = useState<string>(FormData.instance.password)
    const [confirmedPasswordValue, setConfirmedPasswordValue] = useState<string>(FormData.instance.password)
    const [policyCheckedValue, setPolicyCheckedValue] = useState<boolean>(false)

    const [emailFormatValid, setEmailFormatValid] = useState<boolean>(true)
    const [passwordNotEmptyValid, setPasswordNotEmptyValid] = useState<boolean>(true)
    const [passwordConfirmValid, setPasswordConfirmValid] = useState<boolean>(true)
    const [termAgreed, setTermAgreed] = useState<boolean>(true)

    function submit(): void {
        const checkEmailFormatValid = emailValue.toLowerCase().match(
            `^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$`
        ) !== null
        const checkPasswordNotEmptyValid = passwordValue.length > 0
        const checkPasswordConfirmValid = passwordValue === confirmedPasswordValue
        const checkedTermAgreed = policyCheckedValue

        setEmailFormatValid(checkEmailFormatValid)
        setPasswordNotEmptyValid(checkPasswordNotEmptyValid)
        setPasswordConfirmValid(checkPasswordConfirmValid)
        setTermAgreed(checkedTermAgreed)

        if(DEBUG_MODE || (checkEmailFormatValid && checkPasswordConfirmValid && checkedTermAgreed)) {
            FormData.instance.email = emailValue
            FormData.instance.cell = phoneValue
            FormData.instance.password = passwordValue
            props.trigger(PagesEnum.Second)
        }
    }

    return <div className="glow-border page-container" style={{width: "330px"}}>
        <SpaceBetween size='xs' direction='vertical'>
            <img src={cipraLogo} alt='cipra logo' width='90%' className='line-align-center'/>
            <h2 className='line-align-center'>Create an account</h2>
            <SpaceBetween size='m' direction='horizontal'>
                <div>Email</div>
            </SpaceBetween>
            <Input onChange={({detail}) => setEmailValue(detail.value)}
                   value={emailValue}
                   type="email"
                   placeholder="Email Address"
            ></Input>
            {
                !emailFormatValid && <p className='tip-text'>Email format is not correct.</p>
            }
            <SpaceBetween size='m' direction='horizontal'>
                <div>Cell</div>
            </SpaceBetween>
            <PhoneInput
                country={'us'}
                value={phoneValue}
                onChange={phone => setPhoneValue(phone)}
                buttonStyle={{
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
                    borderTop: '2px solid #9ba7b6',
                    borderBottom: '2px solid #9ba7b6',
                    borderLeft: '2px solid #9ba7b6'
                }}
                inputStyle={{
                    width: '100%',
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px',
                    borderTop: '2px solid #9ba7b6',
                    borderBottom: '2px solid #9ba7b6',
                    borderRight: '2px solid #9ba7b6'
                }}
                placeholder="Cellphone number"
            />

            <SpaceBetween size='m' direction='horizontal'>
                <div>Password</div>
            </SpaceBetween>
            <Input onChange={({detail}) => setPasswordValue(detail.value)}
                   value={passwordValue}
                   type="password"
                   placeholder="Password"
            ></Input>
            {
                !passwordNotEmptyValid && <p className='tip-text'>Password cannot be empty.</p>
            }

            <SpaceBetween size='m' direction='horizontal'>
                <div>Confirmed Password</div>
            </SpaceBetween>
            <Input onChange={({detail}) => setConfirmedPasswordValue(detail.value)}
                   value={confirmedPasswordValue}
                   type="password"
                   placeholder="Confirmed Password"
            ></Input>
            {
                !passwordConfirmValid && <p className='tip-text'>Password not the same.</p>
            }

            <SpaceBetween size='m' direction='horizontal'>
                <div>Terms of Service</div>
            </SpaceBetween>
            <div style={{
                height: '150px',
                overflow: 'auto',
                borderRadius: '8px',
                border: '2px solid #9ba7b6'
            }}>
                {termAgreement}
            </div>
            <Checkbox onChange={({detail}) => setPolicyCheckedValue(detail.checked)}
                      checked={policyCheckedValue}>
                I have read and agree to the Terms and Conditions, including the <a href={'https://www.cipra.ai/privacy-policy'} target={'_blank'} rel="noreferrer">Privacy Policy</a>.
            </Checkbox>
            {
                !termAgreed && <p className='tip-text'>You must agree with the Terms of Service.</p>
            }

            <div className='line-align-center'>
                <Button variant='primary' onClick={submit}>
                    Join BP Guidance
                </Button>
            </div>
        </SpaceBetween>
    </div>
}
