import styles from './style';
import {Navbar, Hero, Stats, Billing, Business, CardDeal, CTA, Clients, Testimonials, Footer,} from './components'

export default function App() {
  return (
    <div className= {`bg-primary `}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className= {`${styles.boxWidth}`}>
          <Navbar />
        </div>
      
      </div>

      <div className= {`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className= {`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> 
          <Business /> 
          <Billing /> 
          <CardDeal /> 
          <Testimonials /> 
          <Clients /> 
          <CTA /> 
          <Footer />

        </div>
      </div>


    </div>
  );
}

