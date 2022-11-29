import { Button, HTag, Rating } from '../components'
import { useEffect, useState } from 'react'

export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(3)

  return (
    <div>
      <HTag tag='h3'>{`Rating: ${rating}`}</HTag>

      <Button
        appearance='primary'
        style={{marginRight: 10}}
        onClick={() => setRating(x => x<5 ? x+1 : x)}
      >
        Increase
      </Button>
      <Button
        appearance='primary'
        onClick={() => setRating(x => x>0 ? x-1 : x)}
      >
        Decrease
      </Button>

      <Rating
        rating={rating}
        isEditable
        setRating={setRating}
      />
    </div>
  )
}
