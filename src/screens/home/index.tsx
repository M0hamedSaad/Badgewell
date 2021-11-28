import React, { useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Search, Text } from '../../components'
import { COLORS } from '../../utils'
import styles from './styles'
import LottieView from 'lottie-react-native';
import { Item } from './item'
import { getContacts } from '../../redux/actions'
import { IContact } from '../../interfaces'

const Home = () => {
  const dispatch = useDispatch()
  const { loading, contacts, totalPages } = useSelector((state: any) => state.contactsState);
  const [page, setPage] = useState(1)
  const [searchResults, setSearchResults] = useState([])
  const [isSearch, setIsSearching] = useState(false)

  useEffect(() => { dispatch(getContacts(page)) }, [page])

  const onEndReached = () => { isSearch ? null : page < totalPages ? setPage(page + 1) : null }//pagination..

  const renderItem = ({ item }: any) => { return (<Item item={item} />) }

  const onChangeText = (e: string) => {
    setIsSearching(true)
    let text = e.toLowerCase()
    setSearchResults(contacts.filter((item: IContact) => {
      return item.name.toLowerCase().match(text) || item.phone.toLowerCase().match(text)
    }))
    if (!text || text === '') {
      setIsSearching(false)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Search
        inputProps={{
          placeholder: 'Search contacts',
          onChangeText: onChangeText
        }} />
      <View style={styles.container}>
        {loading && page == 1 ? <ActivityIndicator color={COLORS.PRIMARY} />
          : contacts?.length == 0 ?
            <View>
              <View style={styles.sad} >
                <LottieView
                  source={require('../../assets/images/sad.json')}
                  autoPlay
                  loop={false} />
              </View>
              <Text>
                {'Sorry ,no contacts yet '}
              </Text>
            </View>
            :
            <FlatList
              keyboardShouldPersistTaps='handled'
              initialNumToRender={15}
              onEndReached={onEndReached}
              keyExtractor={(item, index) => { return index.toString() }}
              data={isSearch ? searchResults : contacts}
              renderItem={renderItem}
              contentContainerStyle={styles.contentContainerStyle}
            />}

        {loading && page > 1 && <ActivityIndicator color={COLORS.PRIMARY} style={styles.indicator} />}

      </View>
    </SafeAreaView >
  )
}
export default Home