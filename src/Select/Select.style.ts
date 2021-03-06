/**
 * Having React typings in scope is necessary for styled components not using React directly, otherwise
 * botched module names like `import("eac")` show up in the .d.ts files due to a typescript compiler error.
 * See issue: https://github.com/emotion-js/emotion/issues/788
 * @todo remove this as soon as the issue is fixed.
 */
// @ts-ignore
import * as React from "react"

import { floatIn, readableTextColor, resetTransform } from "../utils"
import { deprecatedExpandColor } from "../utils/constants"
import * as mixins from "../utils/mixins"
import styled from "../utils/styled"

const Container = styled("div")<{
  id?: string
  color?: string
  disabled: boolean
  style?: {}
  role?: string
  tabIndex?: number
  onClick?: () => void
}>(({ theme, color, disabled }) => {
  const backgroundColor = deprecatedExpandColor(theme.deprecated, color) || theme.deprecated.colors.white
  return {
    backgroundColor,
    label: "select",
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: `${theme.deprecated.spacing / 2}px ${(theme.deprecated.spacing * 2) / 3 + 40}px ${theme.deprecated
      .spacing / 2}px ${(theme.deprecated.spacing * 2) / 3}px `,
    borderRadius: 4,
    width: "fit-content",
    minWidth: 240,
    minHeight: 20,
    border: "1px solid",
    borderColor: theme.deprecated.colors.inputBorder,
    opacity: disabled ? 0.5 : 1,
    cursor: "pointer",
    color: readableTextColor(backgroundColor, ["black", "white"]),
    outline: "none",
    pointerEvents: disabled ? "none" : "all",
    // downward caret.
    "&::after": {
      content: "''",
      position: "absolute",
      top: "50%",
      right: theme.deprecated.spacing / 2,
      width: 0,
      height: 0,
      border: "4px solid transparent",
      borderTopColor: theme.deprecated.colors.gray,
      transform: "translateY(calc(-50% + 2px))",
    },
    "&:focus": mixins.inputFocus({
      theme,
    }),
  }
})

const DisplayValue = styled("div")<{ isPlaceholder: boolean }>(({ theme, isPlaceholder }) => ({
  color: isPlaceholder ? theme.deprecated.colors.gray : theme.deprecated.colors.black,
}))

const Options = styled("div")(
  {
    position: "absolute",
    // Push it down 6px so it doesn't overlap with the focus shadow,
    // and there's a comfortable 2px gap.
    top: "calc(100% + 6px)",
    left: 0,
    width: "100%",
    overflow: "hidden",
    borderRadius: 4,
    opacity: 0,
    transform: "translateY(-10px)",
    animation: `${floatIn} .15s forwards ease,
    ${resetTransform} .15s forwards ease`,
  },
  ({ theme }) => ({
    boxShadow: theme.deprecated.shadows.popup,
    zIndex: theme.deprecated.baseZIndex + 300,
  }),
)

const OptionsList = styled("div")(({ theme }) => ({
  // whole number + 3/4 ratio here ensures options don't get cut off
  maxHeight: theme.deprecated.spacing * 12.75,
  overflow: "auto",
}))

export { Container, Options, OptionsList, DisplayValue }
