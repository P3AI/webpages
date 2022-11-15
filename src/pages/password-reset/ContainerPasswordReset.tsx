import {PasswordResetEntryPage} from "./PasswordResetEntryPage";
import '../__pages.css'
import React, {useEffect, useState} from "react";
import {PasswordResetNewPasswordPage} from "./PasswordResetNewPasswordPage";
import {PasswordResetSuccessPage} from "./PasswordResetSuccessPage";

export enum PasswordResetPageEnum {
    Entry,
    NewPassword,
    Success
}

export function ContainerPasswordReset(): JSX.Element {

    const [showPage, setShowPage] = useState<PasswordResetPageEnum>(PasswordResetPageEnum.Entry)
    const [showPageContent, setShowPageContent] = useState<JSX.Element>()

    useEffect(() => {
        const getShowPage = (pageEnum: PasswordResetPageEnum): JSX.Element => {
            switch (pageEnum){
                case PasswordResetPageEnum.Entry:
                    return <PasswordResetEntryPage trigger={setShowPage} />
                case PasswordResetPageEnum.NewPassword:
                    return <PasswordResetNewPasswordPage trigger={setShowPage} />
                case PasswordResetPageEnum.Success:
                    return <PasswordResetSuccessPage />
            }
            return <div></div>
        }
        setShowPageContent(getShowPage(showPage))
    }, [showPage])


    return <div className='center-screen'>
        {showPageContent}
    </div>
}
