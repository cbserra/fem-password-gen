import { twclsx } from '@/utils'

import { Outlet } from 'react-router-dom'

const LayoutMain = (): JSX.Element => {
  return (
    <>
      <main className={twclsx('layout')}>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutMain
