import Link from 'next/link'
import MainLayouts from '@/components/layouts/MainLayout'


export default function Content() {
  return (

      <MainLayouts>
          <h1>Contact Page</h1>
          <h1 className={'title'}>
            Ir a
            <Link href={'/'}>Contact</Link>

          </h1>
          <p className={'description'}>
            Get started by editing&nbsp;
            <code className={'code'}>pages/contact.tsx</code>
          </p>



      </MainLayouts>
  )
}
