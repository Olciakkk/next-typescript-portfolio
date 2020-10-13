import { makeStyles } from '@material-ui/styles'
import { Theme } from '../../utils/theme'

export default makeStyles<Theme>(({ color }) => ({
  blueTile: {
    background: color.lightblue,
  },
  greyTile: {
    background: color.lightgray,
  },
}))
