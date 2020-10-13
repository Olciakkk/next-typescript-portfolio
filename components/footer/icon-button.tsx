import React from 'react'
import { Button, Tooltip } from 'antd'

export interface IconButtonProps {
  url: string
  title: string
  icon: JSX.Element
}
export const IconButton: React.FC<IconButtonProps> = ({ url, title, icon }) => (
  <Tooltip placement="top" title={title}>
    <Button
      type="primary"
      icon={
        <a href={url} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      }
    />
  </Tooltip>
)