import React from 'react'
import { TitleProps } from 'antd/lib/typography/Title'
import clsx from 'clsx'

import useStyles from './typography.styles'

export const Headline: React.FC<TitleProps> = ({ children, className, ...rest }) => {
  const classes = useStyles({})

  return (
    <h1 {...rest} className={clsx(classes.headline, className)}>
      {children}
    </h1>
  )
}
