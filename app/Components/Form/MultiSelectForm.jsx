import React from 'react'
import { StyleSheet, } from 'react-native'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import MultiSelectInput from '../MultiSelectInput/MultiSelectInput';

export default function MultiSelectForm({name, ...otherProps}) {
    const { errors, setFieldValue,values, touched} = useFormikContext()
    return (
        <>
            <MultiSelectInput
                selectedItems={values[name]}
                {...otherProps}
                setSelectedItems={(item)=>setFieldValue(name, item)}
            />
            <ErrorMessage isTouched={touched[name]} error={errors[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})



