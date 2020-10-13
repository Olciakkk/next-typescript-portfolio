import React from 'react'
import useStyles from './typograpy.styles'
import Text, { TextProps } from "antd/lib/typography/Text"

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