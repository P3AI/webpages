export class ResetPasswordData {
    static instance: ResetPasswordData = new ResetPasswordData()

    EndpointEmailExist = 'https://mesdata.ucsd.edu:5001/emailexists/'
    EndpointSendEmail = 'https://mesdata.ucsd.edu:5001/sendresetpasswordurl?email=' // parameter email
    EndpointResetPassword = 'https://mesdata.ucsd.edu:5001/resetpassword'

    emailExist(
        emailAddress: string,
        whenExist: () => void,
        whenNotExist: () => void
    ): void {
        const url = this.EndpointEmailExist + emailAddress;
        fetch(url)
            .then(response => {
                if(response.ok) {
                    whenExist()
                }
                else{
                    whenNotExist()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    sendEmail(
        emailAddress: string,
        whenSuccess: () => void,
        whenFailed: () => void
    ): void {
        const url = this.EndpointSendEmail + emailAddress;
        fetch(url)
            .then(response => {
                if(response.ok){
                    whenSuccess()
                } else {
                    whenFailed()
                }
            })
            .catch(err => {
                console.log(err);
                whenFailed();
            })
    }

    submit(emailAddress: string, password: string, callbackSuccess: () => void, callbackFail: () => void): void {
        const submitData = {
            email: emailAddress,
            password: password
        }
        fetch(this.EndpointResetPassword, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(response => {
                console.log(response)
                callbackSuccess()
            })
            .catch(e => {
                console.log('Network Issue: ' + e)
                callbackFail()
            })
        console.log("submitted", submitData)
    }
}
