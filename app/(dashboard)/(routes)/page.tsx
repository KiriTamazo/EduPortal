import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <p>This is protected page</p>
    <p className='text-3xl text-sky-500'>Hello</p>
    <Button variant='destructive'>Click</Button>
    </>
  )
}
