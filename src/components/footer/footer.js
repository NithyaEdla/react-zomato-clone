import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-header'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*' />
        <div>
        <div className='footer-dropdown-country'>
            <select>
              <option value="india">
                <img src='https://cdn-icons-png.flaticon.com/128/14009/14009677.png' alt='India Flag'/>INDIA</option>
              <option value="uae"><img src='https://cdn-icons-png.flaticon.com/128/3373/3373319.png' alt='Uae Flag'/>UAE</option>
            </select>
            </div>
          <div className='footer-dropdown-language'>
            <select>
              <option value="english"><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'alt='English Language'/>English</option>
              <option value="hindi"><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png' alt='Hindi Language'/>Hindi</option>
              {/* <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Indonesian</option>
              <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Portugues</option>
              <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Espanol</option>
              <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Cestina</option>
              <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Slovencina</option>
              <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Polish</option>
              <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Italian</option>
              <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Vietnamese</option>
              <option><img src='https://cdn-icons-png.flaticon.com/128/3083/3083741.png'/>Turkce</option> */}
            </select>
            </div>
            </div>
          </div>  
        <div className='footer-sections'>
          <div className='footer-section'>
            <h3>ABOUT ZOMATO</h3>
          <div className='footer-list'>
            <ul>Who We Are</ul>
            <ul>Blog</ul>
            <ul>Work With Us</ul>
            <ul>Investor Relations</ul>
            <ul>Report Fraud</ul>
            <ul>Press Kit</ul>
            <ul>Contact Us</ul>
            </div>
        </div>
        <div className='footer-section'>
          <h3>ZOMAVERSE</h3>
          <div className='footer-list'>
            <ul>Zomato</ul>
            <ul>Blinkit</ul>
            <ul>Feeding India</ul>
            <ul>Hyperpure</ul>
            <ul>Zomaland</ul>
            <ul>Weather Union</ul>
          </div>
        </div>
        <div className='footer-section'>
          <h3>FOR RESTAURANTS</h3>
          <div className='footer-list'>
            <ul>Partner With Us</ul>
            <ul>Apps For You</ul>
          </div>
        </div>
        <div className='footer-section'>
          <h3>LEARN MORE</h3>
          <div className='footer-list'>
            <ul>Privacy</ul>
            <ul>Security</ul>
            <ul>Terms</ul>
            <ul>Sitemap</ul>
          </div>
        </div>

        <div className='footer-section footer-social links'>
          <h3>SOCIAL LINKS</h3>
          <div>
          <img src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png' alt='Facebook'/>
          <img src='https://cdn-icons-png.flaticon.com/128/3670/3670274.png' alt='Instagram'/>
          <img src='https://cdn-icons-png.flaticon.com/128/2168/2168336.png'alt='Twitter'/>
          <img src='https://cdn-icons-png.flaticon.com/128/3669/3669688.png' alt='LinkedIn'/>
          <img src='https://cdn-icons-png.flaticon.com/128/2168/2168281.png'alt='YouTube'/>
          </div>
        </div>
      </div>  

        <hr />

        <div className='footer-terms'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
        </div>  
    </div>
  )
}

export default Footer;