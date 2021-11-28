import { View } from "react-native"
import { Text } from "../../components"
import styles from './styles'
import React from "react"
import { FONTS } from "../../utils"
import { IContact } from '../../interfaces'
import FastImage from "react-native-fast-image"
interface Props {
    item: IContact,
}
export const Item = ({ item }: Props) => {
    return (
        <View style={styles.card}>
            <FastImage source={{ uri: item.image }} style={styles.img} />
            <View>
                <Text type={FONTS.BOLD} >{item.name}</Text>
                <Text>{'Mobile • ' + item.phone}</Text>
            </View>
        </View>
    )
}

const equal = (prev: any, next: any) => {
    return prev.item.place_id === next.item.place_id
}

export default React.memo(Item, equal)