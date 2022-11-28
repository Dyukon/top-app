import { Button, HTag } from '../components'

export default function Home(): JSX.Element {
  return (
    <div>
      <HTag tag='h3'>Text</HTag>
      <Button appearance='primary'>Primary Button</Button>
      <Button appearance='ghost'>Ghost Button</Button>
    </div>
  )
}
