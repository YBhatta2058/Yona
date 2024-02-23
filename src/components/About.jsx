import React from 'react'

const About = () => {
  return (
    <div className="aboutus__cointainer">
    <div className="ourgoal_cointainer">
      <h1 style={{textAlign: 'center'}}>Our Goal</h1>
      <div className="aboutus__ourgoal">
        <div className="aboutus__image">
          <img src="./aboutusimg.jpg" alt="" srcset="" />
        </div>
        <div className="aboutus__content">
          <span>
            The name 'YONA' is a union of the two words 'Yoga' and
            'Naturopathy'. YONA is a Wellness and Wellbeing Company that
            focuses primarily on fixing lifestyle disorders and general
            wellness for physical, mental and spiritual health. Providing a
            safe space for all age groups that seek the need for alternative
            and drugless healthcare treatments and therapies.Here at YONA we
            aim to provide drug free treatments in a world of cortisol induced
            problems. Yoga is synonymous with healthy way of natural living
            through Yogic Asanas, Pranayama, procedures providing healthy
            living and permanent remedy to various ailments very well
            interwoven with other systems of healings. Naturopathy has been
            greatly advocated by Father of Nation Mahatma Gandhi. He practiced
            and preached Nature Cure as the "Answer for Mother India", best
            suitable for India, based on its geographical, cultural, social
            and economic conditions. Nature Cure is a system of man living in
            harmony with constructive principles of Nature on the physical,
            mental and moral planes of human beings. The balance of these
            elements is health and its imbalance is ill-health. Naturopathy
            seeks to encompass all the drugless therapies (with proven &
            empirical basis) and seeks to present to the human beings as an
            option of total health care without any chemical or herbal
            medicines. This is especially relevant in the present times with
            the rise of life style diseases to almost epidemic proportions and
            that to despite the advancements in modern science and super
            specialty care.
          </span>
        </div>
      </div>
    </div>
    <div className="ourteam__container">
      <h1 style={{textAlign: 'center'}}>Our Team</h1>
      <div className="ourteam__list">
        <div className="ourteam__img" id="team1">
          <img src="./team1.png" alt="" srcset="" />
        </div>
        <div className="ourteam__content">
          <span className="ourteam__name">DR.FLORA.N.DKHAR </span><br /><span
            className="ourteam__post">Co-Founder</span><br /><br />
          A Rtd. Superintendent of Ganesh Das Govt. Hospital, Shillong. with
          over 40 years of Clinical experience in the filed of medicine. Truly
          believes that future healthcare has alternative treatments like Yoga
          & Naturopathy that have a holistic approach towards a sustainable
          future.
        </div>
      </div>
      <div className="ourteam__list">
        <div className="ourteam__img" id="team2">
          <img src="./team2.png" alt="" srcset="" />
        </div>
        <div className="ourteam__content">
          <span className="ourteam__name">DR.EMIDAKA DKHAR</span><br /><span className="ourteam__post">Co-founder &
            President</span><br /><br />

          Aiming to optimism and promote wellness and well-being for a better
          tomorrow. I value time efforts, accuracy and dedication. Confidently
          skilled in the field of Naturopathy and Yoga/Integrative
          Medicine/Functional Medicine/ Drugless Therapy/Energy Medicine and
          Holistic Healthcare expert with experience in India's top
          Naturopathy and Yoga Hospital .A BNYS graduate from SDM College of
          Naturopathy and Yogic Science, Karnataka.
        </div>
      </div>
      <div className="otherteam__coinatainer">
        <div className="otherteam">
          <span className="ourteam__name">MRS. EN DKHAR</span><br />
          <span className="ourteam__post">Chief Operating Officer</span>
        </div>
        <div className="otherteam">
          <span className="ourteam__name">MR.AIBAN.L. DKHAR </span><br />
          <span className="ourteam__post">Engineer</span>
        </div>
        <div className="otherteam">
          <span className="ourteam__name">DR.R.V.DIENGDOH </span><br />
          <span className="ourteam__post">Consultancy manager</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About