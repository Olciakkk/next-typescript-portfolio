import React from 'react'

import { ResponsiveContainer } from '@portfolio/styleguide'
import { BodyText } from '@portfolio/styleguide/typography'

import { SocialMedia } from './social-media'

const container: React.CSSProperties = {
  backgroundColor: '#333',
  textAlign: 'center',
}

export const Footer: React.FC = () => (
  <footer style={container}>
    <ResponsiveContainer>
      <SocialMedia />
      <div style={{ margin: '40px 0' }}>
        <img src="/images/react.png" className="icon" alt="" />

        <BodyText color="white" style={{ marginBottom: 20 }}>
          This website is using the production build of Next.js (React)
        </BodyText>
      </div>
      <BodyText sub color="white">
        &copy; {new Date().getFullYear()} Pavel Srom
      </BodyText>
    </ResponsiveContainer>

    <style jsx>{`
      .icon {
        display: block;
        margin: 0 auto;
        max-width: 48px;
        max-height: 48px;
        animation-name: rotate;
        animation-timing-function: linear;
        animation-duration: 20000ms;
        animation-iteration-count: infinite;
      }

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </footer>
)
