import React from 'react'
import { NextPage } from 'next'
import { projects } from '../../data/projects'
import useStyles from './portfolio.style'
import { ProjectTile } from './project-tile/project-tile'

export const Portfolio: NextPage = () => {
  const classes = useStyles()

  return (
    <>
      {projects.map((projectData, index) => (
        <ProjectTile
          className={index % 2 === 0 ? classes.bgBlue : classes.bgGrey}
          key={index}
          {...projectData}
        />
      ))}
    </>
  )
}
