import React from "react"
import { storiesOf } from "@storybook/react"

import Dialog, { DialogHeader, DialogBody, DialogActions } from "../src"

storiesOf("Dialog", module).add("Basic", () =>
  <Dialog visible={true}>
    <DialogHeader>Dialog Header</DialogHeader>
    <DialogBody>
      <p>lorem ipsum...</p>
    </DialogBody>
    <DialogActions>
      <button>Button 1</button>
      <button>Button 2</button>
    </DialogActions>
  </Dialog>
)
