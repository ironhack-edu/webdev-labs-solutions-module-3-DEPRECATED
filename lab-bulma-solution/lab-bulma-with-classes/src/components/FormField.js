import React from 'react';

class FormField extends React.Component {
// FormField is nested inside <Signup /> and all these names come from there (we passed them as props )
// example: <FormField theLabel="Name" whatType="text" theTextForThePlaceHolder="e.g Alex Smith" />
//                          |               |                      |
    render(){ //            |               |                      |------------------------
        //                  |               |---------------------------------              |
        return( //          |----------------------------                      ||
            <div className="field form-field">      {/* | */}              {/* | */}    {/* | */}
                                                    {/* | */}              {/* | */}    {/* | */}
                                                    {/* V */}              {/* | */}    {/* | */}
                <label className="label">{this.props.theLabel}</label>     {/* | */}    {/* | */}
                <div className="control">                                  {/* | */}    {/* | */}
                    <input                         //                          |            |
                        className="input"          //                          |            |
                        type={this.props.whatType} // <-------------------------            |
                        placeholder={this.props.theTextForThePlaceHolder} // <---------------
                    />
                </div>
            </div>
        )
    }
}

export default FormField;