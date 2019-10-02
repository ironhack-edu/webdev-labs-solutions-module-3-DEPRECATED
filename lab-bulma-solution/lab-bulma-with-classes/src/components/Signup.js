import React from 'react';
// import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

class Signup extends React.Component {
    render () {
        return (
            <div className="signup"> 
                <main className="container">
                    <FormField theLabel="Name" whatType="text" theTextForThePlaceHolder="e.g Alex Smith" />
                    <FormField theLabel="Email" whatType="email" theTextForThePlaceHolder="e.g. alexsmith@gmail.com" />
                    <FormField theLabel="Password" whatType="password" theTextForThePlaceHolder="********" />

                    <CoolButton isSmall isDanger className="is-rounded my-class">Sign up</CoolButton>
                </main>
            </div>
        )
    }
}

export default Signup;
