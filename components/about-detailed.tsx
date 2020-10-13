import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Divider } from 'antd'
import { Theme } from '../utils'
import { aboutPage } from '../data/about'
import { LineLength, ResponsiveContainer, Subheadline, BodyText } from '../styleguide'

const { detailedIntro } = aboutPage

const useStyles = makeStyles<Theme>(({ color, spacing }) => ({
  about: {
    background: color.lightblue,
  },
  subheadline: {
    textAlign: 'center',
    fontWeight: 'bolder',
    marginBottom: spacing(2),
  },
  divider: {
    margin: `${spacing(10)}px 0`,
    borderTopWidth: 2,
  },
}))

export const AboutDetailed: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.about}>
      <ResponsiveContainer>
        <LineLength narrow>
          {detailedIntro.map(({ headline, text }, index) => (
            <React.Fragment key={headline}>
              <Subheadline className={classes.subheadline}>{headline}</Subheadline>
              {text.map((item, idx) => (
                <React.Fragment key={idx}>
                  {typeof item === 'string' ? <BodyText>{item}</BodyText> : item}
                </React.Fragment>
              ))}

              {index !== detailedIntro.length - 1 && (
                <Divider className={classes.divider} />
              )}
            </React.Fragment>
          ))}
        </LineLength>
      </ResponsiveContainer>
    </section>
  )
}
