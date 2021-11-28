import React, { FC, useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { Button, Input } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { login, signUp } from '../../redux/actions'
import { CONSTANTS } from '../../utils'
interface Props {
    navigation?: any,
    tab?: number,
    setTab?: any,
}
export const Form: FC<Props> = ({ navigation, tab, setTab }) => {
    const { user, loading } = useSelector((state: any) => state.userState);
    const { register, loading: loadingRegister } = useSelector((state: any) => state.registerState);

    const dispatch = useDispatch()
    const [username, onChangeUsername] = useState('')
    const [password, onChangePassword] = useState('')

    useEffect(() => {
        if (user) navigation.replace('HomeStack')
    }, [user])

    useEffect(() => {
        if (register) setTab(0)
    }, [register])

    const press = () => {
        let data = { username, password }
        if (tab == 0) dispatch(login(data))
        else dispatch(signUp(data))
    }
    return (
        <View>
            <Input
                label={CONSTANTS.USERNAME}
                inputProps={{
                    placeholder: CONSTANTS.ENTER_USERNAME,
                    onChangeText: onChangeUsername,
                }} />

            <Input
                password={true}
                label={CONSTANTS.PASSWORD}
                inputProps={{
                    placeholder: CONSTANTS.ENTER_PASSWORD,
                    onChangeText: onChangePassword,
                    returnKeyType: 'go',
                    onSubmitEditing: press
                }} />

            <Button
                loading={loading || loadingRegister}
                title={tab == 0 ? CONSTANTS.LOGIN : CONSTANTS.SIGNUP}
                style={styles.btn}
                onPress={press} />
        </View>
    )
}
export default Form