import { useField } from 'formik'
import React from 'react'

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <label > {label} </label>
            <input {...field} {...props}/>
            {
                meta.touched && meta.error ? <div>{meta.error}</div> : null
            }
        </div>
    )
}

export default TextInput