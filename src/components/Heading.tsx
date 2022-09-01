import { twclsx } from '@/utils/twclsx'

const Heading = (): JSX.Element => {
  return <h1 className={twclsx('text-heading-sm')}>Password Generator</h1>
}

export default Heading
