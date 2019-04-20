// @flow
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'

import { Button } from './mui'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accentBackground: {
    backgroundColor: '#00CFF3',
  },
  buttonContainer: {
    marginVertical: 16,
  },
  contentContainerStyle: {
    marginVertical: 24,
  },
  group: {
    alignItems: 'center',
    marginBottom: 56,
  },
})

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('All buttons', () => (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.group}>
        <Button text="Default" />
      </View>
      <View style={styles.group}>
        <Button text="Default primary" primary />
      </View>
      <View style={styles.group}>
        <Button text="Default accent" accent />
      </View>
      <View style={styles.group}>
        <Button text="Default disabled" disabled />
      </View>
      <View style={styles.group}>
        <Button text="Raised" raised />
      </View>
      <View style={styles.group}>
        <Button text="Raised primary" primary raised />
      </View>
      <View style={styles.group}>
        <Button text="Raised accent" accent raised />
      </View>
      <View style={styles.group}>
        <Button text="Raised disabled" raised disabled />
      </View>
      <View style={styles.group}>
        <Button text="Outlined" outlined />
      </View>
      <View style={styles.group}>
        <Button text="Outlined primary" primary outlined />
      </View>
      <View style={styles.group}>
        <Button text="Outlined accent" accent outlined />
      </View>
      <View style={styles.group}>
        <Button text="Outlined disabled" outlined disabled />
      </View>
    </ScrollView>
  ))
