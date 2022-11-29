import { RatingProps } from './Rating.props'
import cn from 'classnames'
import styles from './Rating.module.css'
import { useEffect, useState, KeyboardEvent } from 'react'
import StarIcon from './star.svg'

export const Rating = ({ isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          key={`${i}`}
          className={cn(styles.star, {
            [styles.fill]: i<currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i+1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => {
            handleKeyDown(i, e)
          }}
        />)
    })
    setRatingArray(updatedArray)
  }

  const changeDisplay = (rating: number) => {
    if (isEditable) {
      constructRating(rating)
    }
  }

  const onClick = (i: number) => {
    if (isEditable && setRating) {
      setRating(i+1)
    }
  }

  const handleKeyDown = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code==='Space' && isEditable && setRating) {
      setRating(i+1)
    }
  }

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  )
}