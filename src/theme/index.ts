import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import colors from './colors'

const theme = extendTheme({ styles, colors })

export { theme }
