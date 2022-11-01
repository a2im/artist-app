import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { SocialFollowWhite } from "./SocialFollow"
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black">
      <Container>
        <div className="artistFooter max-w-4xl grid grid-cols-1 md:grid-cols-2 mx-auto justify-center md:gap-9 my-auto px-10">
            <Link href="/" passHref>
            <a>
              <Image className="grow" src="/logos/white-logos/A2IM-logo-white.png" alt='a2im logo' height={100} width={100} layout={'responsive'} objectFit={'contain'} />
            </a>
            </Link>
            <SocialFollowWhite />
        </div>
      </Container>
    </footer>
  )
}
