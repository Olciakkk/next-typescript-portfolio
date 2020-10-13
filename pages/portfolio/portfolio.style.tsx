import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../utils/theme";

export default makeStyles<Theme>(theme => ({
  bgBlue: {
    background: theme.color.lightblue,
  },
  bgGrey: {
    background: theme.color.lightgray,
  },
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
  chipInner: {
    margin: 2,
    color: theme.color.primary,
    background: '#fff',
    border: `1px solid ${theme.color.primary}`,
  },
  chipBox: {
    display: 'flex',
    justifyContent: 'center',
  },
}))