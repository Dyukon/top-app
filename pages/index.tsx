import { Button, HTag } from '../components'
import { useEffect, useState } from 'react'

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0)
  const [isOdd, setIsOdd] = useState<boolean>(false)

  useEffect(() => {
    setIsOdd(counter % 2 > 0)
  }, [counter])

  useEffect(() => {
    console.log(`counter: ${counter}`)
    return () => {
      console.log(`unmounted`)
    }
  })

  return (
    <div>
      <HTag tag='h3'>{`Count: ${counter}`}</HTag>

      <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x+1)}>Increase</Button>
      <Button appearance='ghost' arrow='down' onClick={() => counter>0 ? setCounter(x => x-1) : null}>Decrease</Button>

      <HTag tag='h3'>{`Is odd: ${isOdd}`}</HTag>
    </div>
  )
}
