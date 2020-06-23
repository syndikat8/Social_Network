import React from "react";
import styles from "./FomrControls.module.css";
import {Field} from "redux-form";


export const FormControl = ({input, meta, child, ...props}) => {

  const hasError = meta.touched && meta.error
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textare = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder, name, validate, component, props = {}, text = "") => {
  return <div>
    <Field
      validate={validate}
      placeholder={placeholder}
      name={name}
      component={component}
      {...props}/> {text}
  </div>
}

