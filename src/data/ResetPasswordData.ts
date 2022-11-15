export class ResetPasswordData {
    static instance: ResetPasswordData = new ResetPasswordData()

    email: string = ''
    password: string = ''

    EndpointResetPassword = 'https://mesdata.ucsd.edu:5001/resetpassword'

    emailExist(
        whenExist: () => void,
        whenNotExist: () => void
    ): void {
        const url = 'https://mesdata.ucsd.edu:5001/emailexists/' + this.email
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

    submit(callbackSuccess: () => void, callbackFail: () => void): void {
        const submitData = {
            email: this.email,
            password: this.password
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
    }
}
