// @todo -> type this better
import * as React from "react"
import * as ReactFeather from "react-feather"

type SizeFactors = {
  [key: string]: number
}

const sizeFactors: SizeFactors = {
  small: 0.5,
  medium: 1,
  large: 2,
}

type IconName = string
type IconSize = keyof SizeFactors // any key from sizeFactors object

type Props = {
  name: IconName
  size?: IconSize
  sizeOverride?: number
  theme?: Theme
}

const Icon: React.SFC<Props> = ({ name = "Play", size = "medium", sizeOverride, theme }: Props) => {
  const themeSpacing = theme ? theme.spacing : 16,
    pixelSize = sizeOverride || themeSpacing * sizeFactors[size],
    props = {
      size: pixelSize,
    },
    // @todo -> this, better
    IconLib = ReactFeather as any

  if (IconLib.hasOwnProperty(name)) {
    const Comp = IconLib[name]
    return <Comp {...props} />
  } else {
    return <div>Icon doesn't exist</div>
  }
}
export default Icon
export { Icon }