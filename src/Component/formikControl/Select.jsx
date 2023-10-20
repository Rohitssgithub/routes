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


import { ErrorMessage } from 'formik';
import React from 'react';
import Select from 'react-select'; // Import from react-select
import TextError from '../TextError/TextError'
// import 'react-select/dist/react-select.css';


const CustomSelect = (props) => {
    const { name, label, options, ...rest } = props;

    console.log('options', options)

    return (
        <div className='input-control'>
            <label htmlFor={name}>{label}</label>
            <Select
                id={name}
                name={name}
                className='field'
                options={options}
                {...rest}
                isSearchable={true}
            />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default CustomSelect; // Renamed the component to avoid conflicts with react-select
