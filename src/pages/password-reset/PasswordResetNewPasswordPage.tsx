import {Button, Input, SpaceBetween} from "@cloudscape-design/components";
import {useState} from "react";
import {ResetPasswordData} from "../../data/ResetPasswordData";
import cipraLogo from "../../res/cipra_logo.png";
import {useParams} from "react-router";

export function PasswordResetNewPasswordPage(): JSX.Element {

    const {email} = useParams()
    const [showBlock, setShowBlock] = useState<boolean>(true)
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [confirmedPasswordValue, setConfirmedPasswordValue] = useState<string>('')

    const [firstLoad, setFirstLoad] = useState<boolean>(true)

    function submit(): void{
        console.log("email", email)
        if(!email) return
        setFirstLoad(false)
        if(passwordValue.length === 0 || passwordValue !== confirmedPasswordValue) return
        ResetPasswordData.instance.submit(
            email,
            passwordValue,
            () => setShowBlock(false),
            () => console.log('Network Error')
        )
    }

    return <div className='center-screen'>
        <div className='glow-border page-container page-width-constrain'>
            <SpaceBetween size='m' direction='vertical'>
                <img src={cipraLogo} alt='cipra logo' width='90%' className='line-align-center'/>
                <h2 className='line-align-center'>Reset Passwords</h2>
                {
                    (showBlock) &&
                    <SpaceBetween size='m' direction='vertical'>
                        <SpaceBetween size='m' direction='horizontal'>
                            <div>Password</div>
                        </SpaceBetween>
                        <Input onChange={({detail}) => setPasswordValue(detail.value)}
                               value={passwordValue}
                               type="password"
                               placeholder="Password"
                        ></Input>
                        {
                            !(firstLoad || passwordValue.length !== 0) && <p className='tip-text'>Password cannot be empty.</p>
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
                            !(firstLoad || passwordValue === confirmedPasswordValue) && <p className='tip-text'>Password not the same.</p>
                        }
                        <div className='line-align-center'>
                            <Button variant='primary' onClick={submit}>
                                Submit
                            </Button>
                        </div>
                    </SpaceBetween>
                }
                {
                    !showBlock &&
                    <div>
                        <p className='line-align-center'>Password has been reset.</p>
                    </div>
                }
            </SpaceBetween>
        </div>
    </div>
}
