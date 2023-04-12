import Link from 'next/link'
import MainLayouts from '@/components/layouts/MainLayout'
import DarkLayout from '@/components/layouts/DarkLayout'
import { ReactElement } from 'react'


export default function About() {
  return (

    <>
      <h1>About Page</h1>

      <h1 className={'title'}>
        Ir a
        <Link href={'/'}>Home</Link>

      </h1>
      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/About.tsx</code>
      </p></>



  )
}

About.getLayout = function getLAyout(page: ReactElement) {
  return (
    <MainLayouts>

      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayouts>
  )
}
