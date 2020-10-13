import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'

export default makeStyles<Theme>(({ color }) => ({
  bgBlue: {
    background: color.lightblue,
  },
  bgGrey: {
    background: color.lightgray,
  },
}))
