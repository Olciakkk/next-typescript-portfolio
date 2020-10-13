import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from 'antd'
import { Theme } from '../utils/theme'
import ResponsiveContainer from '../styleguide/responsive-container'
import { Headline, Subheadline } from '../styleguide/typography'
import LineLength from '../styleguide/line-lenght'

const useStyles = makeStyles<Theme>(({ color }) => ({
  section: {
    background: color.lightblue,
  },
  mailBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const ContactSection: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.section}>
      <ResponsiveContainer>
        <LineLength>
          <Headline style={{ textAlign: 'center' }}>Let&apos;s get in touch</Headline>
          <Subheadline style={{ marginBottom: 40 }}>
            If you have an idea that you want to bring to life, or just want to say hi,
            then let&apos;s get in touch!
          </Subheadline>
          <div className={classes.mailBtn}>
            <Button type="primary" href="mailto:srompavel98@gmail.com">
              Email me
            </Button>
          </div>
        </LineLength>
      </ResponsiveContainer>
    </section>
  )
}

export default ContactSection
