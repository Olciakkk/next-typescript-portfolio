import React from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/styles'
import { Button } from 'antd'
import { Theme } from '../../utils'
import { LineLength, ResponsiveContainer } from '../../styleguide'
import { Headline, Subheadline } from '../../styleguide/typography'

const useStyles = makeStyles<Theme>(({ color }) => ({
  section: {
    background: color.lightblue,
  },
  aboutBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export const AboutTeaser: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <ResponsiveContainer>
        <LineLength>
          <Headline style={{ textAlign: 'center' }}>Something about me</Headline>
          <Subheadline style={{ marginBottom: 40 }}>
            I&apos;m a web developer based in Copenhagen, Denmark. I build websites and
            web applications - from scratch to deployment. I fell in love with code a
            while ago, and haven&apos;t looked back since.
          </Subheadline>
          <div className={classes.aboutBtn}>
            <Link href="/about">
              <Button type="default">Get to know me more</Button>
            </Link>
          </div>
        </LineLength>
      </ResponsiveContainer>
    </section>
  )
}
