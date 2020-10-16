import React, { useState } from 'react'
import { NextPage } from 'next'
import { Switch } from 'antd'

import { makeStyles } from '@material-ui/styles'
import { ServiceTeaser, SkillsDetailed, SkillsSimple } from '@portfolio/components'
import { ResponsiveContainer, Headline, BodyText, Subheadline } from '@portfolio/styleguide'
import { Theme } from '@portfolio/utils'

const useStyles = makeStyles<Theme>(theme => ({
  section: {
    backgroundColor: theme.color.lightblue,
  },
  switch: {
    marginTop: 20,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const Skills: NextPage = () => {
  const classes = useStyles()
  const [isDetailedView, setView] = useState<boolean>(false)

  return (
    <>
      <ServiceTeaser />
      <section className={classes.section}>
        <ResponsiveContainer>
          <div className={classes.flexColumn}>
            <Headline>Technology I work with</Headline>
            <Subheadline style={{ marginBottom: 32 }}>
              Explore the stack and technologies I use!
            </Subheadline>{' '}
            <Switch
              checked={isDetailedView}
              onChange={() => setView(!isDetailedView)}
            />
            <BodyText>View in detail</BodyText>
          </div>
          {isDetailedView ? <SkillsDetailed /> : <SkillsSimple />}
        </ResponsiveContainer>
      </section>
    </>
  )
}

export default Skills
