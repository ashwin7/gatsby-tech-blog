import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'


const Tag = ({ title, count, desc, link, className }) => (
  <div className="cardTag">
    <a href={link.toLowerCase() + '/'} className='tagCard'>
      <div className='content-box'>
        <div className='content-image' style={{backgroundImage:`url(${withPrefix('/')}img/${className}.png)`}}></div>
        <div className='content-header'>{title}</div>
        <p>{desc}</p>
      </div>
    </a>
  </div>
)

Tag.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
}
export default Tag
