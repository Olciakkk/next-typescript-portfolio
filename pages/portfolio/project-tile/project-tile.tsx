import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Project } from '../../../data/types'
import { BodyText, Headline, LineLength, ResponsiveContainer, Subheadline } from '../../../styleguide'
import useStyles from './project-tile.style'
import { RelatedSources } from './related-sources'
import { TechnologiesUsed } from './technologies-used'

export const ProjectTile: React.FC<{
  className?: string
} & Project> = ({ imgSrc, headline, bodyText, techUsed, github, demo, className, ...rest }) => {
  const classes = useStyles()
  
  return (
    <section {...rest} className={className}>
      <ResponsiveContainer>
        <a
          style={{ cursor: 'default' }}
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoadImage
            className={classes.img}
            alt=""
            src={imgSrc}
            height={585}
            width={285}
          />
        </a>

        <LineLength narrow className={classes.lineLength}>
          <Headline className={classes.headline}>{headline}</Headline>
          {bodyText.map((text, idx) => (
            <BodyText key={idx}>{text}</BodyText>
          ))}
          <Subheadline className={classes.subheadline}>Technology used</Subheadline>
          <div className={classes.chipBox}>
            <TechnologiesUsed names={techUsed} />
          </div>
          <div className={classes.buttons}>
            <RelatedSources githubUrl={github} demoUrl={demo} />
          </div>
        </LineLength>
      </ResponsiveContainer>
    </section>
  )
}
