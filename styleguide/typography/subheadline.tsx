import React from 'react'
import clsx from 'clsx'
import Text, { TextProps } from 'antd/lib/typography/Text'

import useStyles from './typography.styles'

export const Subheadline: React.FC<TextProps> = ({ children, className, ...rest }) => {
  const classes = useStyles({})

  return (
    <Text {...rest} className={clsx(classes.subheadline, className)}>
      {children}
    </Text>
  )
}