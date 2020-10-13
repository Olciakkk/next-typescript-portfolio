import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { IconButton, IconButtonProps } from './icon-button'
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons'

const useStyles = makeStyles(() => ({
  iconBox: {
    marginBottom: 40,
    '& > * + *': {
      marginLeft: 16,
    },
  },
}))

const icons: IconButtonProps[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/PavelSrom',
    icon: <GithubOutlined />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pavel-srom-3011a8171',
    icon: <LinkedinOutlined />,
  },
  {
    title: 'Medium',
    url: 'https://medium.com/@srompavel98',
    icon: <MediumOutlined />,
  },
]

export const SocialMedia: React.FC<{

}> = () => {
  const classes = useStyles()

  return (
    <div className={classes.iconBox}>
      {icons.map((content, index) => (
        <IconButton key={index} {...content} />
      ))}
    </div>
  )
}