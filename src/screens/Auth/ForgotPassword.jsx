import React, { PureComponent } from 'react'
import ComponentAuthFromForgotPassword from '../../components/Auth/Form/ForgotPassword'

export class ScreenAuthForgotPassword extends PureComponent {
  render() {
    return (
        <div className="row">
        <ComponentAuthFromForgotPassword />
        <br></br><br></br>
    </div>
    )
  }
}

export default ScreenAuthForgotPassword