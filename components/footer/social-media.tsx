import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons'

import { IconButton } from './icon-button'

const useStyles = makeStyles(() => ({
  iconBox: {
    marginBottom: 40,
    '& > * + *': {
      marginLeft: 16,
    },
  },
}))

export const SocialMedia: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.iconBox}>
      <IconButton title="GitHub" url="https://github.com/PavelSrom">
          <GithubOutlined />
        </IconButton>
        <IconButton
          title="LinkedIn"
          url="https://www.linkedin.com/in/pavel-srom-3011a8171"
        >
          <LinkedinOutlined />
        </IconButton>
        <IconButton title="Medium" url="https://medium.com/@srompavel98">
          <MediumOutlined />
        </IconButton>
    </div>
  )
}