import { makeStyles } from "@material-ui/styles";
import { Theme } from "../../utils";

export default makeStyles<Theme, Partial<{
  color: 'white'
  sub: boolean
}>>(({ breakpoints }) => ({
  headline: {
    fontSize: 48,
    fontWeight: 400,
    marginBottom: 0,
    [breakpoints.down.md]: {
      fontSize: 36,
    },
  },
  subheadline: {
    display: 'block',
    fontSize: 24,
    fontWeight: 350,
  },
  bodyText: {
    color: ({ color }) => color && color,
    fontSize: ({ sub }) => (sub ? 12 : 18),
  },
}))