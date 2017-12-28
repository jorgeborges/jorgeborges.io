import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Jorge A. Borges`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          This is the personal website of <strong>Jorge A. Borges</strong>,
          a Software Engineer living in Sydney who enjoys programming as much as he loves pizza.{' '}
          <a href="https://twitter.com/jorgeborgesc">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
