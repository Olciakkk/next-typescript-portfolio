import React from 'react'
import { Button } from 'antd'
import Link from 'next/link'

export const RelatedSources: React.FC<{
  githubUrl: string,
  demoUrl: string,
}> = ({ githubUrl, demoUrl }) => {
  return (
    <>
      <Link href={githubUrl}>
        <Button rel="noopener noreferrer" target="_blank" href={githubUrl} type="default">
          View code
        </Button>
      </Link>

      <Link href={demoUrl}>
        <Button
          rel="noopener noreferrer"
          target="_blank"
          href={githubUrl}
          type="primary"
          style={{ color: '#fff' }}
        >
          View demo
        </Button>
      </Link>
    </>
  )
}
