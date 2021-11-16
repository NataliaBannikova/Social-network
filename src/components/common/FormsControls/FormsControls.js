import React from "react";
import { Component } from "react";
import { Field } from "redux-form";
import s from "./FormsControls.module.css";

const FormControl = ({input, meta: {touched, error}, Formtype, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
           <div>
                <Formtype {...input} {...props} />
           </div>
          { hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props} Formtype="textarea"></FormControl>
       
} 


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} Formtype="input"></FormControl>
} 

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name} 
            validate={validators} component={component} {...props} /> {text}
    </div>
)