import React from 'react'
import Text, { TextProps } from "antd/lib/typography/Text"

import useStyles from './typography.styles'

type BodyTextProps = TextProps & Partial<{
  color: 'white'
  sub: boolean
}>

export const BodyText: React.FC<BodyTextProps> = ({ children, color, sub, ...rest }) => {
  const classes = useStyles({ color, sub })

  return (
    <Text {...rest} className={classes.bodyText}>
      {children}
    </Text>
  )
}