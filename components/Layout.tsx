import React, { FC, ReactNode, useState } from 'react'
import Navigation from './Navigation'

type LayoutProps = {
  // children: ReactNode,
  children: Function,
}

type AlertState = {
  isActive: boolean
  message: string
  type: 'SUCCESS' | 'ERROR'
}

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';


const Layout: FC<LayoutProps> = ({ children }) => {
  const [alert, setAlert] = useState<AlertState>({ isActive: false, message: '', type: SUCCESS })
  const handleAlert = (message: string, type: AlertState['type']) => {
    setAlert({ isActive: true, message, type });
    setTimeout(() => setAlert({ isActive: false, message: '', type: SUCCESS }), 3000)
  }
  return (
    <>
      <Navigation />
      {
        alert.isActive && (
          <div className={`alert alert-${alert.type === SUCCESS ? 'success' : 'danger'}`} role="alert">
            {alert.message}
          </div>
        )
      }
      <div className='container p-3'>
        {children(handleAlert)}
      </div>
    </>
  )
}

export default Layout