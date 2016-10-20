import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Dialog from '../src'

storiesOf('Dialog', module)
  .addWithInfo('Basic', 'added Description', () => (
    <Dialog />
  ), { inline: true })
  .add('Basic', () => (
    <Dialog />
  ))
