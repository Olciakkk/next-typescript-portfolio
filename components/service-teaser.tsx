import React from 'react'
import Link from 'next/link'
import { Row, Col, Button } from 'antd'
import {
  RiseOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { makeStyles } from '@material-ui/styles'

import { Theme, useResponsiveDesign } from '@portfolio/utils'
import { ResponsiveContainer, Headline, Subheadline, BodyText } from '@portfolio/styleguide'

const useStyles = makeStyles<Theme>(({ color, spacing }) => ({
  section: {
    background: color.lightgray,
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: spacing(2),
  },
  icon: {
    justifySelf: 'center',
    fontSize: spacing(8),
    color: color.primary,
  },
  subheadline: {
    marginTop: spacing(1),
    marginBottom: spacing(1),
    textAlign: 'center',
  },
  skillsBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const items = [
  {
    headline: 'Taking care of everything',
    description: `You no longer need an interface guy, a server guy, and a
		database guy. I take care of everything, from an empty folder to
		deployment.`,
    icon: CheckCircleOutlined,
  },
  {
    headline: 'Complex user interfaces',
    description: `I build products that work and look great on any device,
		regardless of the design and interactivity of choice.`,
    icon: DesktopOutlined,
  },
  {
    headline: 'Behind-the-scenes logic',
    description: `I make sure your data is safe, and that your user interface gets
		exactly what it needs, at any time.`,
    icon: DatabaseOutlined,
  },
  {
    headline: 'Growth and maintenance',
    description: `My code is easy to scale and maintain. I follow the best
		practices whenever I can, and use only modern syntax.`,
    icon: RiseOutlined,
  },
]

type Props = {
  withButton?: boolean
}

export const ServiceTeaser: React.FC<Props> = ({ withButton }) => {
  const classes = useStyles()
  const { spacing } = useResponsiveDesign()

  return (
    <section className={classes.section}>
      <ResponsiveContainer>
        <Headline style={{ textAlign: 'center', marginBottom: spacing }}>
          What can I offer you?
        </Headline>

        <Row gutter={[32, 32]}>
          {items.map(({ headline, description, icon: Icon }) => (
            <Col key={headline} xs={24} md={12}>
              <div className={classes.gridItem}>
                <Icon className={classes.icon} />
                <Subheadline strong className={classes.subheadline}>
                  {headline}
                </Subheadline>
                <BodyText>{description}</BodyText>
              </div>
            </Col>
          ))}
        </Row>

        {withButton && (
          <div className={classes.skillsBtn} style={{ marginTop: spacing }}>
            <Link href="/skills">
              <Button type="default">View all skills</Button>
            </Link>
          </div>
        )}
      </ResponsiveContainer>
    </section>
  )
}
