import { useContext } from "react"
import { ThemeContext } from "styled-components"

export default function useTheme() {
  const t = useContext(ThemeContext)
  console.info("t", t)
  return t
}
