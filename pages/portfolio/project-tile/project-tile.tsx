import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Headline, LineLength, ResponsiveContainer, Subheadline } from '../../../styleguide'
import useStyles from './project-tile.style'
import { RelatedSources } from './related-sources'
import { TechnologiesUsed } from './technologies-used'

export const ProjectTile: React.FC<{
  className?: string
  title: string,
  imageSource: string,
  technologies: string[],
  demoUrl: string,
  githubUrl: string,
}> = ({ title, imageSource, demoUrl, githubUrl, technologies, children, className, ...rest }) => {
  const classes = useStyles()
  
  return (
    <section {...rest} className={className}>
      <ResponsiveContainer>
        <a
          style={{ cursor: 'default' }}
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoadImage
            className={classes.img}
            alt=""
            src={imageSource}
            height={585}
            width={285}
          />
        </a>

        <LineLength narrow className={classes.lineLength}>
          <Headline className={classes.headline}>{title}</Headline>
          {children}
          <Subheadline className={classes.subheadline}>Technology used</Subheadline>
          <div className={classes.chipBox}>
            <TechnologiesUsed names={technologies} />
          </div>
          <div className={classes.buttons}>
            <RelatedSources githubUrl={githubUrl} demoUrl={demoUrl} />
          </div>
        </LineLength>
      </ResponsiveContainer>
    </section>
  )
}
