import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import ResponsiveContainer from '../../styleguide/responsive-container'
import useStyles from './header.style'

const links = ['/about', '/portfolio', '/skills']

const Footer: React.FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [currentLink, setCurrentLink] = useState<string>('/')

  // set active tab on refresh
  useEffect(() => {
    setCurrentLink(router.pathname)
  }, [router.pathname])

  return (
    <>
      <header className={classes.header}>
        <ResponsiveContainer noPadding maxWidth="xl" className={classes.container}>
          <Link href="/">
            <a href="/" onClick={() => setCurrentLink('/')}>
              <p className="logo">{'<Pavel />'}</p>
            </a>
          </Link>

          <nav className={classes.desktopNav}>
            <Menu
              mode="horizontal"
              selectedKeys={[currentLink]}
              onClick={e => setCurrentLink(e.key as string)}
              style={{ display: 'flex' }}
            >
              {links.map(link => (
                <Menu.Item key={link}>
                  <Link href={link}>
                    <a href={link}>{link.slice(1).toUpperCase()}</a>
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </nav>

          <nav className={classes.mobileNav}>
            <Button
              icon={<MenuOutlined className={classes.icon} />}
              onClick={() => setDrawerOpen(true)}
            />
          </nav>

          <Drawer
            visible={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            title="Menu"
            placement="right"
          >
            <p>Burger menu</p>
          </Drawer>
        </ResponsiveContainer>

        <style jsx>{`
          .logo {
            font-family: 'Caveat', cursive;
            font-size: 50px;
            line-height: 50px;
            margin: 0;
          }
        `}</style>
      </header>

      <div style={{ marginBottom: 48 }} />
    </>
  )
}

export default Footer
