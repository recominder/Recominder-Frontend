/* eslint-disable semi */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div id="wrapper">
      <header>
        <a href="/" id="logo">RecoMinder</a>
        <div className="spacer" />
        <nav>
          <ul>
            <li><a href="#you">Who It's For</a></li>
            <li><a href="#us">How It Works</a></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <div className="jumbo-image">
        <div className="jumbo-gradient" />
        <div className="hero-content">
          <h1 className="heading">Timely Recomendations Based On Your Heart Rate</h1>
          <p className="heading">Take your health and your Apple Watch to the next level</p>
          <div className="heading"><a href="#pricing" className="cta">Download the App</a></div>
          <div className="scroll-down" />
        </div>
      </div>
      <section className="interstitial examples" />
      <section className="white" id="services">
        <div className="copy is-hidden"><img alt="placeholder" src="http://i68.tinypic.com/fazct3.png" height={600} /></div>
        <div className="log" />
        <div className="title">Who It's For</div>
        <h2>All You Need Is An Apple Watch And We Do The Rest</h2>
        <p>Download the app and grant RecoMinder permissions to all data in HealthKit and notification access. From there, RecoMinder will start giving you the reminders and Recomendations that you need.</p>
        <div className="watch"><img alt="placeholder" src="https://cdn1.imggmi.com/uploads/2019/1/30/84f539f29d528cd513e54d6b16c33572-full.png" height={500} /></div>
        <div className="title">
          <br />
          How Does It Work?
        </div>
        <h2>Your Heart Rate Says A Lot About You</h2>
        <p>We all know that your heart rate can provide insights into your biological wellbeing. At RecoMinder we take these insights and compare them to your Apple Watch HealthKit data to give our best Recommendations for things you need in the form of a timely notification.</p>
        <div className="flex-container thin-width">
          <div className="column">
            <div className="icons"><img alt="placeholder" src="https://static.thenounproject.com/png/85887-200.png" height={50} /></div>
            <h3>Water Intake</h3>
            <p>RecoMinder sends you daily notifications on the best time to drink water based upon your heart rate and how long it's been since your last intake. You can also set a daily water intake goal that RecoMinder can help you achieve.</p>
            <a href="/serieskit" className="inline-cta">
            Learn More
              <i>
              →
              </i>
            </a>
          </div>
          <div className="column">
            <div className="icons"><img alt="placeholder" src="https://cdn1.imggmi.com/uploads/2019/1/30/b9d4bd52f0b562cac47bba17be340d46-full.png" height={50} /></div>
            <h3>Exercise Time</h3>
            <p>It's hard to find the perfect time to exercise outdoors when so many factors come into play. RecoMinder simplifies this decision for you by taking into account weather conditions, the UV index, and your heart rate to notify you when it's the right time.</p>
            <a href="/sermonclips" className="inline-cta">
            Learn More
              <i>
              →
              </i>
            </a>
          </div>
        </div>
      </section>
      <div className="border" />
      <section className="get-started">
        <Link to="/login" className="cta">Log In</Link>
      </section>
      <footer>
        <p>© 2019 RecoMinder</p>
      </footer>
      <script src="transitions.js" />
    </div>
  )
}

export default Home
