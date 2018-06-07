import * as React from "react"
import { ThemeProvider } from "glamorous"
import { operational } from "@operational/theme"

// Wrap each ui component in its own theme provider to make sure the default
// Contiamo theme is always available. Props are passed along unaltered.
function wrapDefaultTheme<T>(Comp: React.ComponentType<T>): React.SFC<T> {
  return (props: T) => (
    <ThemeProvider theme={operational}>
      <Comp {...props} />
    </ThemeProvider>
  )
}

export default wrapDefaultTheme
