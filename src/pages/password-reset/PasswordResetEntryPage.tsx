import {PasswordResetPageEnum} from "./ContainerPasswordReset";
import cipraLogo from "../../res/cipra_logo.png";
import {Button, Input, SpaceBetween} from "@cloudscape-design/components";
import {useEffect, useState} from "react";
import {ResetPasswordData} from "../../data/ResetPasswordData";

export function PasswordResetEntryPage(props: {trigger: (pageEnum: PasswordResetPageEnum) => void}): JSX.Element {

    const [emailValue, setEmailValue] = useState<string>(ResetPasswordData.instance.email)
    const [emailTip, setEmailTip] = useState<JSX.Element | undefined>(undefined)

    function submit(): void {
        ResetPasswordData.instance.email = emailValue
        ResetPasswordData.instance.emailExist(
            () => props.trigger(PasswordResetPageEnum.NewPassword),
            () => setEmailTip(
                <div>
                    <p>Cannot find account with email address {emailValue}</p>
                    <p>Please contact <a href='mailto: support@cipra.ai'>support@cipra.ai</a> for help</p>
                </div>
            )
        )
    }

    useEffect(() => {

        const enterKeyDown = (event: KeyboardEvent) => {
            if(event.key !== 'Enter') return
            submit()
        }

        document.addEventListener("keydown", enterKeyDown, false);

        return () => {
            document.removeEventListener("keydown", enterKeyDown, false);
        };
    }, [submit]);

    return <div className="glow-border page-container center-screen" style={{maxWidth: "330px"}}>
        <SpaceBetween size='m' direction='vertical'>
            <img src={cipraLogo} alt='cipra logo' width='90%' className='line-align-center'/>
            <h2 className='line-align-center'>Reset Password</h2>
            <SpaceBetween size='m' direction='horizontal'>
                <div>Email</div>
            </SpaceBetween>
            <Input onChange={({detail}) => setEmailValue(detail.value)}
                   value={emailValue}
                   type="email"
                   placeholder="Email Address"
            ></Input>
            {
                (emailTip) && <p className='tip-text'>{emailTip}</p>
            }
            <div className='line-align-center'>
                <Button variant='primary' onClick={submit}>
                    Reset Password
                </Button>
            </div>
        </SpaceBetween>
    </div>
}
