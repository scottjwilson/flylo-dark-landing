import { createGlobalStyle } from "styled-components"
import { colors } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
body {
    background: ${colors.primary.main};
    color: ${colors.neutral.white};

}

`
