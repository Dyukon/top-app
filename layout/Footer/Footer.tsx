import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  const thisYear = format(new Date(), 'yyyy')
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div>
        OwlTop © 2020-{thisYear}. All rights are reserved.
      </div>
      <div>
        <a href='#' target='_blank'>User Agreement</a>
      </div>
      <div>
        <a href='#' target='_blank'>Confidential Policy</a>
      </div>
    </footer>
  )
}