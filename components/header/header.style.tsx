import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../utils/theme";

export default makeStyles<Theme>(theme => ({
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
    [theme.breakpoints.up.md]: {
      padding: `0 ${theme.spacing(4)}px`,
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
    [theme.breakpoints.down.sm]: {
      display: 'none',
    },
  },
  mobileNav: {
    display: 'none',
    [theme.breakpoints.down.sm]: {
      display: 'block',
    },
  },
  icon: {
    color: theme.color.primary,
  },
}))