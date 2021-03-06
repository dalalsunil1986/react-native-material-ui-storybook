import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import { name } from '../app.json'

import './rn-addons'

// import stories
/* eslint-disable global-require */
configure(() => {
  require('../stories/Button')
}, module)

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({})

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(name, () => StorybookUIRoot)

export default StorybookUIRoot
