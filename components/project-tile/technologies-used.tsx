import { Tag } from 'antd'
import React from 'react'
import { makeStyles } from '@material-ui/styles'

import { Theme } from '@portfolio/utils'

const useStyles = makeStyles<Theme>(({ color }) => ({
  chipInner: {
    margin: 2,
    color: color.primary,
    background: '#fff',
    border: `1px solid ${color.primary}`,
  },
}))

export const TechnologiesUsed: React.FC<{
  names: string[]
}> = ({ names }) => {
  const classes = useStyles()
  return (
    <>
      {names.map(name => (
        <div key={name}>
          <Tag className={classes.chipInner}>{name}</Tag>
        </div>
      ))}
    </>
  )
}
