import Link from 'next/link'
import MainLayouts from '@/components/layouts/MainLayout'


export default function Home() {
  return (

      <MainLayouts>
          <h1>Home Page</h1>

          <h1 className={'title'}>
            Ir a
            <Link href={'/about'}>About</Link>

          </h1>
          <p className={'description'}>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>
      </MainLayouts>
  )
}
