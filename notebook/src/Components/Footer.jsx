import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

<footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget company-intro-widget">
                <Link to="#" className="site-logo">iUtsavNotebook</Link>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                <ul className="company-footer-contact-list">
                  <li><i className="fas fa-phone"></i>8758664912</li>
                  <li><i className="fas fa-clock"></i>Mon - Sat 9am-6pm</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget course-links-widget">
                <h5 className="widget-title">Popular Courses </h5>
                <ul className="courses-link-list">
                  <li><Link href="#"><i className="fas fa-long-arrow-alt-right"></i>Data Analytics</Link></li>
                  <li><Link href="#"><i className="fas fa-long-arrow-alt-right"></i>Web Development</Link></li>
                  <li><Link href="#"><i className="fas fa-long-arrow-alt-right"></i>UI/UX</Link></li>
                  <li><Link href="#"><i className="fas fa-long-arrow-alt-right"></i>Digital marketing</Link></li>
                  <li><Link href="#"><i className="fas fa-long-arrow-alt-right"></i>Python programming</Link></li>
                  <li><Link href="#"><i className="fas fa-long-arrow-alt-right"></i>Python Development</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget latest-news-widget">
                <h5 className="widget-title">lastest news</h5>
                <ul className="small-post-list">
                  <li>
                    <div className="small-post-item">
                      <Link href="#" className="post-date">October 3, 2018</Link>
                      <h6 className="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing.</a></h6>
                    </div>
                  </li>
                  <li>
                    <div className="small-post-item">
                      <Link href="#" className="post-date">October 3, 2018</Link>
                      <h6 className="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing</a></h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <h5 className="widget-title">Newsletter</h5>
                <div className="footer-newsletter">
                  <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p>
                  <form className="news-letter-form">
                    <input type="email" name="news-email" id="news-email" placeholder="Your email address" />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>


    
      
    </div>
  )
}

export default Footer
