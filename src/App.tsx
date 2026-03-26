import { Deck } from './components/Deck'
import {
  TitleSlide,
  PremiseSlide,
  HandlerComparisonSlide,
  OwnershipSlide,
  BorrowingSlide,
  LifetimesSlide,
  LifetimesInPracticeSlide,
  NoInheritanceSlide,
  TraitsSlide,
  NullSlide,
  ErrorsSlide,
  ZeroCostSlide,
  ResourcesSlide,
} from './slides'

const slides = [
  { component: TitleSlide, variant: 'title' as const },
  { component: PremiseSlide },
  { component: HandlerComparisonSlide },
  { component: OwnershipSlide },
  { component: BorrowingSlide },
  { component: LifetimesSlide },
  { component: LifetimesInPracticeSlide },
  { component: NoInheritanceSlide },
  { component: TraitsSlide },
  { component: NullSlide },
  { component: ErrorsSlide },
  { component: ZeroCostSlide },
  { component: ResourcesSlide },
]

export function App() {
  return <Deck slides={slides} />
}
