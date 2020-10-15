import React, { useState } from 'react'
import { NextPage } from 'next'
import { Switch } from 'antd'
import { makeStyles } from '@material-ui/styles'
import { ServiceTeaser } from '../components'
import { ResponsiveContainer, Headline, BodyText, Subheadline } from '../styleguide'
import { Theme } from '../utils'
import SkillsDetailed from '../components/skills-detailed'
import SkillsSimple from '../components/skills-simple'

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
  const [detailedVisible, setDetailedVisible] = useState<boolean>(false)

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
              checked={detailedVisible}
              onChange={() => setDetailedVisible(!detailedVisible)}
            />
            <BodyText>View in detail</BodyText>
          </div>
          {detailedVisible ? <SkillsDetailed /> : <SkillsSimple />}
        </ResponsiveContainer>
      </section>
    </>
  )
}

export default Skills
