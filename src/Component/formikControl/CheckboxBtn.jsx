import { Checkbox } from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from '../TextError/TextError'
import styles from '../../Component/formikControl/Input.module.scss'

const CheckboxBtn = (props) => {
    console.log('props', props)
    const { name, label, options, ...rest } = props
    console.log('options', options)
    return (
        <div className={styles.inputControl}>
            <label htmlFor={name}>{label}</label><br/>
            <Field name={name}{...rest} 
                className={styles.inputField}
            
            >
                {
                    ({field})=>{
                        return options.map((option)=>{
                            return (
                                <div key={option.key} >
                                    <Checkbox 
                                    {...field}
                                    id={option.value}
                                    value={option.value}
                                    checked={field?.value?.includes(option?.value)} 
                                    {...label}  
                                    color="success"
                                    // required
                                     />
                                    <label htmlFor={option.value}>{option.key}</label><br/>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default CheckboxBtn

