import React from 'react'
import RadioButtons from './RadioButtons'
import CustomSelect from './Select'
import TextArea from './TextArea'
import Checkbox from './CheckboxBtn'
import DatePickers from './DatePicker'
import Password from './Password'
import Input from './Input'

const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <Input {...rest} />

        case 'textarea': return <TextArea {...rest} />

        case 'select': return <CustomSelect {...rest} />

        case 'radio':return <RadioButtons {...rest} />

        case 'checkbox': return <Checkbox {...rest} />

        case 'date': return <DatePickers {...rest} />

        case 'password': return <Password {...rest} />

        default: return null
    }
}

export default FormikControl
