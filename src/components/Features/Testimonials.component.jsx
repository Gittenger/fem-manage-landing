import React, { useReducer } from 'react'
import styles from './styles/Testimonials.module.css'
import gridStyles from '../General/styles/Layout.module.css'
import CIndex from '../components.index.js'
import images from '../../assets/img-index.js'

const {
  avatar: { AliImg, AnishaImg, ShanaiImg, RichardImg },
} = images

const initialState = [true, false, false, false]

function reducer(state, action) {
  return state.map((el, i) => (i === action.type ? true : false))
}

const Testimonials = () => {
  const { Btn, TestimonialItem } = CIndex
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div
      id={styles.parent}
      className={`TESTIMONIALS grid ${gridStyles.gridSection}`}
    >
      <h2
        id={styles.heading}
        className={`text-center text-4xl font-black mt-8 mb-24`}
      >
        What they've said
      </h2>
      {state[0] ? (
        <TestimonialItem
          imgSrc={AliImg}
          name="Ali Bravo"
          textContent="“We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”"
        />
      ) : state[1] ? (
        <TestimonialItem
          imgSrc={AnishaImg}
          name="Anisha Li"
          textContent="“Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”"
        />
      ) : state[2] ? (
        <TestimonialItem
          imgSrc={ShanaiImg}
          name="Shanai Gough"
          textContent="“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”"
        />
      ) : state[3] ? (
        <TestimonialItem
          imgSrc={RichardImg}
          name="Richard Watts"
          textContent="“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”"
        />
      ) : (
        <TestimonialItem imgSrc={AliImg} />
      )}
      <div
        id="indicators"
        className={`${styles.indicators} flex justify-center space-x-1 mt-6 mb-16`}
      >
        {state.map((el, i) => (
          <div key={i}>
            <button
              className={state[i] ? styles.activeInd : ''}
              onClick={() => {
                dispatch({ type: i })
              }}
            ></button>
          </div>
        ))}
      </div>
      <Btn
        id={styles.btn}
        className="justify-self-center shadow-lg mb-12"
        textContent="Get Started"
      />
    </div>
  )
}
export default Testimonials
