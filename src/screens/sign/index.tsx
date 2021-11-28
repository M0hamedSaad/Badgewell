import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  View,
  Image
} from 'react-native';
import { Tabs } from '../../components';
import styles from './styles';
import { IMAGES, normalize } from '../../utils';
import * as Animatable from 'react-native-animatable';
import Form from './form';
const { createAnimatableComponent } = Animatable;
const AnimatableView = createAnimatableComponent(View);
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<any>;

const Sign = ({ navigation }: Props) => {
  const [tab, setTab] = useState(0)
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={IMAGES.LOGO}
        style={styles.logo} />

      <Tabs
        tab={tab}
        setTab={setTab} />

      <KeyboardAvoidingView style={{ flex: 1 }}>

        <ScrollView
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: normalize(25) }}>

          <AnimatableView
            animation={tab == 0 ? 'slideInRight' : 'slideInLeft'}
            duration={400}>
            <Form navigation={navigation} tab={tab} setTab={setTab} />
          </AnimatableView>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Sign;