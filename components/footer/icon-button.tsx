import React from 'react'
import { Button, Tooltip } from 'antd'

export const IconButton: React.FC<{
  url: string
  title: string
}> = ({ url, title, children }) => (
  <Tooltip placement="top" title={title}>
    <Button
      type="primary"
      icon={
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      }
    />
  </Tooltip>
)