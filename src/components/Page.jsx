import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { HashLink as HLink } from 'react-router-hash-link'

const Page = () => {
  console.log("Page loaded")
  return (
    <>
      <section className="headerFull" id = "Home">
        <header id="home">
          <div className="section__container header__container">
            <div className="header__content">
              <div>
                <span className="topHeader">The future is here at YONA</span>
                <br />
                <span className="topHeader">(YOGA AND Naturopathy)</span>
                <p style={{fontSize: '1rem', fontWeight: '400', color: '#000000aa'}}>
                  <br />
                  Discover the Path to Wellness with Yona. Experience the Future
                  of Yoga at Yona.
                </p>
                <p style={{fontSize: '1rem' , fontWeight: '400' ,  color: '#000000aa'}}>
                  Reserve Your Session Today and Receive one free yoga class
                </p>
                
              </div>
              <br />
              <Link to = "/book" className="btn">Book Appointment</Link>
            </div>
          </div>
        </header>
      </section>
      
      <section className="section__container why__container" id = "services">
        <div className="why__image">
          <img src="./why.jpg" alt="why yoga" />
        </div>
        <div className="why__content">
          <h2 className="section__header">WHY CHOOSE YONA</h2>
          <p>
            Engaging in yoga offers a holistic approach to wellness,
            encompassing both physical and mental benefits. Through a series of
            poses, stretches, and muscle strength. Its meditative aspects
            encourage mindfulness, reducing stress and anxiety while promoting a
            sense of inner peace.
          </p>
          <ul>
            <li>
              <span>
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              Drugless approach
            </li>
            <li>
              <span>
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              Cure Lifestyle disorders
            </li>
            <li>
              <span>
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              Stress Management
            </li>
            <li>
              <span>
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              Chronic Pain Management
            </li>
            <li>
              <span>
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              Food is Medicine
            </li>
            <li>
              <span>
                <i className="ri-checkbox-circle-fill"></i>
              </span>
              Active Lifestyle
            </li>
          </ul>
        </div>
      </section>
      <video loop autoPlay controls muted>
        <source src = "./promo.mp4" type = "video/mp4"/>
      </video>
      <section className="section__container classes__container" id="classes">
        <h2 className="section__header"></h2>
        <div className="specificationBox">
          <div className="brow">
            <div className="sBox">
              
              <img
                src="./firstYoga.jpg"
                alt=""
              />
              <h4>A wellness and healthcare startup from Shilong, Meghalaya</h4>
              <p>
                We take immense pride in being the first in the region to offer
                the enriching blend of yoga and naturopathy. Our commitment is
                rooted in introducing you to a unique wellness experience, where
                ancient traditions and modern practices converge. Join us on
                this groundbreaking journey towards holistic well-being, as we
                proudly pave the way for a healthier and harmonious NorthEast
                India.
              </p>
            </div>
            <div className="sBox">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4856/4856996.png"
                alt=""
              />

              <h4 style={{marginBottom: '0'}}>Naturopathy-Return to Nature</h4>
              <h4>A Drugless approach for a sustainable future</h4>
              <p>
                Immerse yourself in a holistic healing experience that treasures
                natural remedies over medications. Say goodbye to drugs, and
                welcome a sustainable lifestyle that not only nurtures your
                well-being but also cares for the planet. Choose naturopathy for
                a healthier, drug-free life and a brighter, eco-friendly
                tomorrow
              </p>
            </div>
          </div>
          <div className="brow">
            <div className="sBox">
              <img
                src="./thera.jpg"
                alt=""
              />
              <h4>
                A Scientific Approach towards Therapeutic Yoga & Naturopathy
              </h4>
              <p>
                Discover the essence of well-being with our Scientific Approach
                to Therapeutic Yoga & Naturopathy. We blend ancient wisdom with
                modern science, ensuring a holistic and evidence-based path to
                health. Experience the benefits of traditional healing
                harmonized with scientific principles for a balanced and
                revitalized life.
              </p>
            </div>
            <div className="sBox">
              <img
                src="./noDrug.jpg"
                alt=""
              />
              <h4>Become Drug free with the YoNa community</h4>
              <p>
                Join the YoNa community to embrace a drug-free lifestyle.
                Experience the support and guidance needed to break free from
                dependency on medications. Together, let's build a healthier,
                drug-free future with the strength of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hero" id="hero">
        <h2 className="section__header">Services We Provide</h2>
        <div className="section__container hero__container">
          <div className="hero__card">
            <span>
              <img src="./icon/online.png" alt="hero" />
            </span>
            <h4>Online Consultation</h4>
            <p>
              Transform your well-being from anywhere with our personalized and
              convenient online yoga consultations.
            </p>
          </div>
          <div className="hero__card">
            <span>
              <img src="./icon/weight.png" alt="hero" />
            </span>
            <h4>Weight Loss Program</h4>
            <p>
              Discover a healthier you with our yoga-based weight loss program.
            </p>
          </div>
          <div className="hero__card">
            <span>
              <img src="./icon/pcod.png" alt="hero" />
            </span>
            <h4>PCOD Reversal Program</h4>
            <p>
              Empower yourself on the path to PCOD reversal through our targeted
              yoga program for holistic well-being.
            </p>
          </div>
          <div className="hero__card">
            <span>
              <img src="https://www.svgrepo.com/show/115722/diet.svg" alt="hero" />
            </span>
            <h4 style={{fontSize: '.9rem'}}>Yoga and Diet Type 2 DM Program</h4>
            <p>
              Manage Type 2 Diabetes with a balanced approach – harmonizing yoga
              practices and tailored diet plans for your well-being.
            </p>
          </div>
          <div className="hero__card">
            <span>
              <img src="./icon/icon6.png" alt="hero" />
            </span>
            <h4>Corporate Yoga</h4>
            <p>
              Boost workplace wellness with our tailored corporate yoga
              sessions, promoting relaxation and productivity among your team.
            </p>
          </div>
          <div className="hero__card">
            <span>
              <img src="./icon/icon3.png" alt="hero" />
            </span>
            <h4>Prenatal yoga</h4>
            <p>
              Care for yourself and your baby with our soothing prenatal yoga
              sessions.
            </p>
          </div>
          <div className="hero__card">
            <span>
              <img src="./icon/icon5.png" alt="hero" />
            </span>
            <h4>Online Diet Consultation</h4>
            <p>
              Elevate your nutrition journey with expert guidance through our
              convenient online diet consultations.
            </p>
          </div>
          <div className="hero__card">
            <span>
              <img src="./icon/icon1.png" alt="hero" />
            </span>
            <h4>Acupuncture</h4>
            <p>
              Enhance your well-being through the ancient healing art of
              acupuncture, promoting balance and vitality.
            </p>
          </div>
        </div>
      </section>

      <section className="section__container">
        <h2 className="section__header working__header">
          Working Hand-IN-HAND towards a better healthcare system
        </h2>
        <div className="work__content">
          <div className="workBox">
            <h4>Wellness to Wellbeing</h4>
            <p>
              With the fast moving world and high digital lifestyle. Wellbeing
              for a lot of people has become very mechanical and out of touch
              with their inner self. thereby, allowing stress to overrule their
              life in terms of relationships with themselves,their families,
              friends and colleagues.
            </p>
          </div>
          <div className="workBox">
            <h4>Yoga for mental health</h4>
            <p>
              Yoga is a way of life. Breath work and mindful living is the way
              out to a lot of the mental health conditions like stress, anxiety,
              depression, and mood swings. Yoga and breath awareness is a
              simple,easy,affordable and sustainable way of working our way
              towards a better mental state for everyone irrespectiv eof age
              groups.
            </p>
          </div>
          <div className="workBox">
            <h4>Naturopathy-sustainable healthcare</h4>
            <p>
              Traditional Alternative and Drugless Treatments is a very
              underrated and very less spoken of. However, YONA is here to
              change that concept and bring forward a new generation of Wellness
              and Healthcare for all age groups. YONA also, emphasizes and gives
              equal importance to Diet and Nutrition, based on genetics, and
              staple diets.
            </p>
          </div>
          <div className="workBox">
            <h4>YO-NA (Alternative & Integrated Healthcare)</h4>
            <p>
              Making a holistic approach towards a better tomorrow, uniting Yoga
              and Naturopathy together and building a fruitful future in world
              of cortisol rich lifestyle conditions and disorders.
            </p>
          </div>
        </div>
      </section>

      <section className="section__container classes__container" id="classes">
        <p className="section__subheader">Event</p>
        <h2 className="section__header">Winter Wellness 2023</h2>
        <video loop muted  controls>
        <source src = "./winter.mp4" type = "video/mp4"/>
      </video>
      <div className="description__event">
        Embrace the serenity of the winter season ❄. Find warmth in cozy moments, soothing cups of tea, and the joy of self-care rituals. Let the crisp air invigorate your spirit and remind you of the beauty in slowing down. Take time to nourish your body, mind, and soul amidst the snow-covered landscapes. Winter wellness isn't just about staying warm; it's about finding harmony within. So, cuddle up, indulge in hearty nourishment, and cherish the tranquility of this magical season. Embrace self-care, gratitude, and the enchantment of winter for a well-nourished, serene you.
        </div>
        <div className="classes__grid">
          <div className="classes__image">
            <img src='./yoga1.jpg' alt="classes" />
          </div>
          <div className="classes__image">
            <img src='./yoga4.jpg' alt="classes" />
          </div>
          <div className="classes__image">
            <img src='./yoga5.jpg' alt="classes" />
          </div>

          <div className="classes__image">
            <img src='./yoga9.png' alt="classes" />
          </div>
          <div className="classes__image">
            <img src='./yoga6.jpg' alt="classes" />
          </div>
          <div className="classes__image">
            <img src='./yoga7.jpg' alt="classes" />
          </div>
        </div>
        
      </section>

      <section className="section__container photos__container">
        <p className="section__subheader">GALLERY</p>
        <h2 className="section__header">See The Latest Events with Yona</h2>
        <div className="photos__grid">
          <div className="photos__card">
            <img src="./img2.jpg" alt="photo" />
          </div>

          <div className="photos__card">
            <img src="./img4.jpg" alt="photo" />
          </div>
          <div className="photos__card">
            <img src="./img15.jpg" alt="photo" />
          </div>
          <div className="photos__card">
            <img src="./img5.jpg" alt="photo" />
          </div>
        </div>
        <div className="button__div">
          <HLink to = "/gallery"  className="btn">View more</HLink>
        </div>
      </section>
    </>
  );
};

export default Page;
