import React from 'react'
import { useField } from 'formik'

const Select = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>
                {label}
            </label>
            <select {... field} {...props}/>
            {
                meta.touched && meta.error ? <div>{meta.error}</div> : null
            }
        </div>
    )
}

export default Select