import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/')
  // require as many stories as you need.
}
configure(loadStories, module)
