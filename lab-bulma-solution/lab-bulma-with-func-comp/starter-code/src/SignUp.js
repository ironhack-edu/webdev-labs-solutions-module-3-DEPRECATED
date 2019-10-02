import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

const SignUp = () => (
  <div className="SignUp">
    <Navbar />

    <main className="container">
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <FormField label="Password" type="password"/>

      <CoolButton isSmall isDanger className="is-rounded my-class">Enviar</CoolButton>
    </main>
  </div>
)

export default SignUp;