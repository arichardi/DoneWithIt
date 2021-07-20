import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({name, ...otherProps}) => {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

    return (
        <React.Fragment>
         <AppTextInput 
                    onChangeText={ handleChange(name)}
                    onBlur={ () => setFieldTouched(name)}
                    { ... otherProps}
                />
                <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    )
}

export default AppFormField
