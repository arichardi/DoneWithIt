import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from '../components/ErrorMessage'
import ImageInputList from '../components/ImageInputList'


const FormImagePicker = ({name}) => {

    //variables
    const {errors, setFieldValue, touched, values} = useFormikContext();

    //functions
    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri])
    }

    const handleRemove = uri => {
        setFieldValue(name, values[name].filter( imageUri => imageUri != uri ))
    }

return (
    <>
    <ImageInputList 
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
    />
    <ErrorMessage 
        error={errors[name]}
        visible={touched[name]}
    />
    </>

);
}

export default FormImagePicker
