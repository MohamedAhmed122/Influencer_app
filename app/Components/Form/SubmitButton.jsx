import { useFormikContext } from 'formik'
import React from 'react'
import { StyleSheet, } from 'react-native'
import AppButton from '../../Common/AppButton'

const AppSubmitButton = ({title ,color}) => {
    const {handleSubmit} = useFormikContext()
    return (
        <AppButton 
            title={title}
            color={color} 
            onPress={handleSubmit} 
        />
    )
}

export default AppSubmitButton

const styles = StyleSheet.create({})
