import * as React from "react"
import styled, { css } from "react-emotion"
import Highlight from "react-highlight"
import styles from "./styles"

export interface Props {
  /** Id */
  id?: string
  /** Language for syntax highlighting */
  syntax?: string
  children?: string | string[]
}

const Container = styled("div")`
  display: flex;
  flex: 1;
  pre {
    flex: 1;
    display: flex;
    margin: 0;
  }

  code {
    flex: 1;
  }
`

const Code = styled(Highlight)(({ theme }) => {
  return {
    margin: 0,
    border: "1px solid rgba(20, 153, 206, 0.1)",
    borderRadius: theme.borderRadius,
    padding: `${theme.space.small}px`,

    /**
     * We use !important here to handle an edge case:
     * this component, by default, gets a class .hljs
     * that also imports a global style for this class.
     *
     * Some bundlers (including Styleguidist's) place
     * this imported style _after_ our emotion-based
     * className definition, and the cascading nature
     * of CSS overrides this component's style.
     *
     * In short, we use !important for opinionation
     * of this component.
     */
    backgroundColor: "rgba(20, 153, 206, 0.05) !important",
  }
})

const StyledCode = (props: Props) => (
  <Container>
    <Code className={`${css(styles)} ${props.syntax}`}>{props.children}</Code>
  </Container>
)

export default StyledCode
