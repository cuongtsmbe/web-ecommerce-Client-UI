import React, { PureComponent } from 'react'
import ComponentAuthFormResetPassword from '../../components/Auth/Form/ResetPassword'

export class ScreenAuthResetPassword extends PureComponent {
  render() {
    return (
        <div className="row">
        <ComponentAuthFormResetPassword />
        <br></br><br></br>
    </div>
    )
  }
}

export default ScreenAuthResetPassword