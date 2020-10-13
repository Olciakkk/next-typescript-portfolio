import React from 'react'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import { Theme, DeviceSize } from '../utils'

type ThemeProps = {
  noPadding?: boolean
  maxWidth?: DeviceSize
}

const useStyles = makeStyles<Theme, ThemeProps>(({ spacing, breakpoints }) => ({
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth: ({ maxWidth }) => {
      switch (maxWidth) {
        case 'xs':
          return 600
        case 'sm':
          return 960
        case 'md':
          return 1280
        case 'lg':
          return 1920
        case 'xl':
          return 2560
        default:
          return 1280
      }
    },
    padding: ({ noPadding }) => (noPadding ? 0 : `${spacing(10)}px 0`),
    [breakpoints.down.md]: {
      padding: ({ noPadding }) =>
        noPadding
          ? `0 ${spacing(3)}px`
          : `${spacing(5)}px ${spacing(3)}px`,
    },
    [breakpoints.down.xs]: {
      padding: ({ noPadding }) =>
        noPadding
          ? `0 ${spacing(2)}px`
          : `${spacing(5)}px ${spacing(2)}px`,
    },
  },
}))

type Props = ThemeProps & React.HTMLAttributes<HTMLDivElement>

// work in progress
export const ResponsiveContainer: React.FC<Props> = ({
  children,
  noPadding,
  maxWidth,
  ...rest
}) => {
  const classes = useStyles({ noPadding, maxWidth })

  return (
    // @ts-ignore
    <div {...rest} className={clsx(rest.className, classes.container)}>
      {children}
    </div>
  )
}
