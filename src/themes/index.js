import { colors as defaultColors } from "../../tailwind"

const lightTheme = {
  backgroundColor: defaultColors["grey-lighter"],
  fontAccent: defaultColors["indigo"],
  underlineAccent: defaultColors["indigo-lighter"],
  description: defaultColors["grey-darkest"],
  toggle: defaultColors["grey-light"],
}

const darkTheme = {
  backgroundColor: defaultColors["blue-darkest"],
  fontAccent: defaultColors["green-light"],
  underlineAccent: defaultColors["green-lighter"],
  description: defaultColors["white"],
  toggle: defaultColors["grey-darkest"],
}

export { lightTheme, darkTheme }
