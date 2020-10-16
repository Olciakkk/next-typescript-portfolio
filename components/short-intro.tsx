import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { LineLength, ResponsiveContainer, Headline, Subheadline } from '@portfolio/styleguide'
import { Theme } from '@portfolio/utils'
import { aboutPage } from '@portfolio/data/about'

const useStyles = makeStyles<Theme>(({ color, spacing }) => ({
  intro: {
    backgroundColor: color.lightgray,
  },
  headline: {
    marginBottom: spacing(2),
    textAlign: 'center',
  },
  img: {
    display: 'block',
    margin: '0 auto',
    borderRadius: '50%',
    marginBottom: 40,
  },
}))

const {
  shortIntro: { headline, text },
} = aboutPage

export const ShortIntro: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.intro}>
      <ResponsiveContainer>
        <LazyLoadImage
          src="/images/meRounded.jpg"
          className={classes.img}
          width={256}
          height={256}
          alt=""
        />
        <LineLength>
          <Headline className={classes.headline}>{headline}</Headline>
          {text.map((item, index) =>
            typeof item === 'string' ? (
              <Subheadline key={index}>{item}</Subheadline>
            ) : (
              <React.Fragment key={index}>{item}</React.Fragment>
            )
          )}
        </LineLength>
      </ResponsiveContainer>
    </section>
  )
}
