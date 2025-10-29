import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.linkedin.com/" className="home__social-link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/" className="home__social-link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://mail.google.com/" className="home__social-link" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-envelope"></i>
        </a>
    </div>
  )
}

export default HeaderSocials
