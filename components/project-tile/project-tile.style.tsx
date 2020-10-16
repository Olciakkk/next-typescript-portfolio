import { makeStyles } from '@material-ui/styles'

import { Theme } from '@portfolio/utils'

export default makeStyles<Theme>(() => ({
  img: {
    display: 'block',
    margin: '0 auto',
    maxWidth: 200,
    height: 'auto',
    cursor: 'pointer',
  },
  headline: {
    margin: '20px 0',
    textAlign: 'center',
  },
  subheadline: {
    margin: '32px 0 8px 0',
    fontWeight: 600,
    textAlign: 'center',
  },
  buttons: {
    margin: '40px auto 0 auto',
    maxWidth: 300,
    display: 'flex',
    justifyContent: 'space-between',
  },
  chipBox: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
