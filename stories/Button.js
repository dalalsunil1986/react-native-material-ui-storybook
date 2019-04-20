// @flow
import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'

import { ThemeContext, Button } from './mui'
import crane from './themes/crane'
// import themes from './themes'

const styles = StyleSheet.create({
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
      <ThemeContext.Provider value={crane}>
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
      </ThemeContext.Provider>
    </ScrollView>
  ))
