import cipraLogo from "../../res/cipra_logo.png";
import {Button, Input, SpaceBetween} from "@cloudscape-design/components";
import {useEffect, useState, useCallback} from "react";
import {ResetPasswordData} from "../../data/ResetPasswordData";

export function ForgetPasswordPage(): JSX.Element {

    const [emailValue, setEmailValue] = useState<string>('')
    const [emailTip, setEmailTip] = useState<JSX.Element | undefined>(undefined)
    const [showBlock, setShowBlock] = useState<boolean>(true)

    const submit = useCallback((): void => {
        ResetPasswordData.instance.emailExist(
            emailValue,
            () => {
                ResetPasswordData.instance.sendEmail(
                    emailValue,
                    () => {
                        setShowBlock(false);
                        setEmailTip(
                            <div>
                                Password reset email has been sent to <b>{emailValue}</b>, please check your email inbox for next step.
                            </div>
                        )
                    },
                    () => setEmailTip(
                        <div>
                            Request cannot be processed at the moment.
                        </div>
                    )
                )
            },   // send email
            () => setEmailTip(
                <div>
                    <p>Cannot find account with email address <b>{emailValue}</b></p>
                    <p>Please contact <a href='mailto: support@cipra.ai'>support@cipra.ai</a> for help</p>
                </div>
            )
        )
    }, [emailValue])

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

    return <div className="center-screen">
        <div className="glow-border page-container" style={{maxWidth: "330px"}}>
            <SpaceBetween size='m' direction='vertical'>
                <img src={cipraLogo} alt='cipra logo' width='90%' className='line-align-center'/>
                <h2 className='line-align-center'>Forget Password</h2>
                {
                    (showBlock) &&
                    <SpaceBetween size='m' direction='vertical'>
                        <SpaceBetween size='m' direction='horizontal'>
                            <div>Email</div>
                        </SpaceBetween>
                        <Input onChange={({detail}) => setEmailValue(detail.value)}
                               value={emailValue}
                               type="email"
                               placeholder="Email Address"
                        ></Input>
                        {(emailTip) && <p className='tip-text'>{emailTip}</p>}
                        <div className='line-align-center'>
                            <Button variant='primary' onClick={submit}>
                                Reset Password
                            </Button>
                        </div>
                    </SpaceBetween>
                }
                {
                    (!showBlock) &&
                    <div>
                        <p>{emailTip}</p>
                    </div>
                }
            </SpaceBetween>
        </div>
    </div>
}
