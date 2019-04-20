// @flow
import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'

const stories = storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('All buttons', () => (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.group}>
        <Text>Test</Text>
      </View>
    </ScrollView>
  ))

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
