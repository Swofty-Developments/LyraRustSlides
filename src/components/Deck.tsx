import { type FC } from 'react'
import { Slide } from './Slide'
import { ProgressBar } from './ProgressBar'
import { useSlideNavigation } from '../hooks/useSlideNavigation'
import styles from './Deck.module.css'

interface SlideEntry {
  component: FC
  variant?: 'default' | 'title'
}

interface DeckProps {
  slides: SlideEntry[]
}

export function Deck({ slides }: DeckProps) {
  const { current, direction, total } = useSlideNavigation(slides.length)

  return (
    <div className={styles.deck}>
      {slides.map((entry, i) => {
        const SlideContent = entry.component
        return (
          <Slide
            key={i}
            active={i === current}
            direction={direction}
            variant={entry.variant}
          >
            <SlideContent />
          </Slide>
        )
      })}
      <ProgressBar current={current} total={total} />
      {current === 0 && (
        <div className={styles.hint}>
          Press <kbd>→</kbd> to begin
        </div>
      )}
    </div>
  )
}
