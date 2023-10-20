// import { ErrorMessage, Field } from 'formik'
// import React from 'react'
// // import Select from 'react-select';

// const Select = (props) => {
//     const { name, label, options, ...rest } = props
//     return (
//         <div className='input-control'>
//             <label htmlFor={name}>{label}</label>
//             <Field
//                 as='select'
//                 id={name}
//                 name={name}
//                 className='field'
//                 {...rest}
//             >
//                 <option value=''>
//                     Please select
//                 </option>
//                 {
//                     options.map((option, index) =>
//                         <option key={index} value={option.value}>
//                             {option.value}
//                         </option>
//                     )
//                 }
//             </Field>
//             <ErrorMessage name={name} component={TextError} />
//         </div>
//     )
// }

// export default Select


// import { ErrorMessage } from 'formik';
import React from 'react';
import Select from 'react-select'; // Import from react-select
import TextError from '../TextError/TextError'
import { Field, ErrorMessage, useFormikContext } from 'formik';

console.log('TextError', TextError)

const CustomSelect = (props) => {
    const { name, label, options, ...rest } = props;

    // console.log('options', options)
    const formik = useFormikContext();

    const handleSelectChange = (selectedOption) => {
      formik.setFieldTouched(name, true); 
      formik.setFieldValue(name, selectedOption);
    };

    return (
        <div className='input-control'>
            <label htmlFor={name}>{label}</label>
            <Select
                id={name}
                name={name}
                className='field'
                options={options}
                onChange={handleSelectChange}
                value={formik.values[name]} 
                {...rest}
                isMulti={true} // Enable multi-select
                isSearchable={true}
            />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default CustomSelect;
