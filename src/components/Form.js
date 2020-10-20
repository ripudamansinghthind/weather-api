import React from 'react'
import './css/Form.css'

const Form = props => (
    <form onSubmit={ props.getWeather }>
        <input type="text" name="city" placeholder="City Name" />
        <input type="text" name="country" placeholder="Country Name" />
        <button className="hbtn hb-fill-top-rev-bg-br">Find Weather!</button>
    </form>
);

export default Form;