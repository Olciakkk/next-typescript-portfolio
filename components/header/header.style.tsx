import { makeStyles } from '@material-ui/styles'

import { Theme } from '@portfolio/utils/theme'

export default makeStyles<Theme>(({ color, spacing, breakpoints }) => ({
  header: {
    background: '#fff',
    boxShadow: '0 2px 8px #f0f1f2',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 90,
    width: '100%',
    height: 48,
    display: 'flex',
    flexDirection: 'column',
    [breakpoints.up.md]: {
      padding: `0 ${spacing(4)}px`,
    },
  },
  container: {
    height: '100%',
    justifySelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  desktopNav: {
    [breakpoints.down.sm]: {
      display: 'none',
    },
  },
  mobileNav: {
    display: 'none',
    [breakpoints.down.sm]: {
      display: 'block',
    },
  },
  icon: {
    color: color.primary,
  },
}))
