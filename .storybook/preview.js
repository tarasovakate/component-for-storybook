import React from "react"
import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "@mui/material/styles"

import { theme } from "../src/index"

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
