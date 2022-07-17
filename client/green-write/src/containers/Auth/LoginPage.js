import React from "react";
import {TextField, Button, ButtonGroup } from "@mui/material";
import "./LoginPage.css";

class LoginPage extends React.Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'password',
                value: '',
                validation: {
                    required: true,
                    minLength:6
                },
                valid: false,
                touched: false
            }
        },
    }

    onInputChange = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }

    checkValidity(value, rules) {
        let isValid = true;
        if(!rules){
            return true;
        }
        if(rules.required){
            isValid = value.trim() !== '' && isValid; // trim is for remove white space at the beginning or end
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <TextField
            style={{margin: 10}}
            key={formElement.id} 
            label={formElement.id}
            variant="outlined"
            value={formElement.config.value}
            onChange={(event) => this.onInputChange(event, formElement.id)}
            error={!formElement.config.valid && formElement.config.touched}
            type={formElement.config.elementType}
            />

        ));

        return (
            <div className="Auth">
                <div className="Auth-header">
                    <h1>Login</h1>
                </div>
                <form className="Form">
                    {form}
                </form>
                <ButtonGroup className="ButtonGroup">
                    <Button style={{color: "#11cb5f", fontWeight: "bold"}} variant="text" >회원가입</Button>
                    <Button style={{color: "#0288d1", fontWeight: "bold"}} variant="text" >로그인</Button>
                </ButtonGroup>
            </div>

        )
    }
}

export default LoginPage;