import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Button, Tag } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import LineLength from '../../styleguide/line-lenght'
import ResponsiveContainer from '../../styleguide/responsive-container'
import { Headline, Subheadline, BodyText } from '../../styleguide/typography'
import { projects } from '../../data/projects'
import useStyles from './portfolio.style'

const Portfolio: NextPage = () => {
  const classes = useStyles()

  return (
    <>
      {projects.map(({ imgSrc, headline, bodyText, techUsed, github, demo }, index) => (
        <section
          key={index}
          className={index % 2 === 0 ? classes.bgBlue : classes.bgGrey}
        >
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
                {techUsed.map(item => (
                  <div key={item}>
                    <Tag className={classes.chipInner}>{item}</Tag>
                  </div>
                ))}
              </div>
              <div className={classes.buttons}>
                <Link href={github}>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Button target="_blank" href={github} type="default">
                      View code
                    </Button>
                  </a>
                </Link>

                <Link href={demo}>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Button
                      target="_blank"
                      href={github}
                      type="primary"
                      style={{ color: '#fff' }}
                    >
                      View demo
                    </Button>
                  </a>
                </Link>
              </div>
            </LineLength>
          </ResponsiveContainer>
        </section>
      ))}
    </>
  )
}

export default Portfolio
