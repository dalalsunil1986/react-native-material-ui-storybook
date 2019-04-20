import { YellowBox } from 'react-native'
import StorybookUI from './storybook'

YellowBox.ignoreWarnings([
  // this is fixed in storybook 5
  // see: https://github.com/storybooks/storybook/issues/6078
  'Warning: Async Storage',
])

export default StorybookUI
