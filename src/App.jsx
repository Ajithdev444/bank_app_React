import React from 'react'
import styles from './style'

import{  Navbar, Billing, Business, Button,  CardDeal, Clients,CTA, FeedbackCard,Footer, GetStarted,  Hero,
  Stats, Testimonials,} from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.padding} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
         
        </div>
      </div>

    </div>
  
  )
}

export default App