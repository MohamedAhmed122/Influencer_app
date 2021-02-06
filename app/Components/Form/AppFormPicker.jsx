import React from 'react'
import { useFormikContext } from 'formik'
import ErrorMessage from './ErrorMessage'
import AppPicker from '../../Common/AppPicker/AppPicker'

const AppFormPicker = ({name,items, ...otherProps}) => {
    const { errors, setFieldValue,values, touched} = useFormikContext()
    return (
        <>
             <AppPicker 
                setSelectedItem={(item)=>setFieldValue(name, item)}
                {...otherProps}
                items={items} 
                selectedItem={values[name]} 
            />
            <ErrorMessage isTouched={touched[name]} error={errors[name]}/>
        </>
    )
}
export default AppFormPicker
