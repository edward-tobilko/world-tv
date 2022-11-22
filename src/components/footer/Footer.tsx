import "./footer.scss";

import { FaRegCopyright } from "react-icons/fa";

import {
  aboutCompanyData,
  apps,
  sectionsData,
  socialLinks,
} from "../../data/data";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="sections">
          <h2 className="sections-title">Sections</h2>
          <ul className="sections__menu">
            {sectionsData.map((section) => (
              <li className="sections__menu-list" key={section.id}>
                <a
                  href="https://www.google.com/"
                  className="sections__menu-link"
                  target="blank"
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="about__company">
          <h2 className="about__company-title">About the company</h2>
          <ul className="about__company-menu">
            {aboutCompanyData.map((company) => (
              <li className="about__company-menu-list" key={company.id}>
                <a
                  href="https://www.google.com/"
                  className="about__company-menu-link"
                  target="blank"
                >
                  {company.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="address">
          <h2 className="address-title">Address</h2>
          <a
            href="https://www.google.com/maps/place/Westwood+Ln,+Kings+Park,+NY+11754,+%D0%A1%D0%A8%D0%90/@40.87538,-73.228409,17z/data=!3m1!4b1!4m5!3m4!1s0x89e83af8a6897245:0x614a00182ee23f58!8m2!3d40.87538!4d-73.228409"
            className="address-subtitle"
            target={"blank"}
          >
            (631) 361-4920 5 Westwood Ln Kings Park, New York(NY), 11754
          </a>
        </div>

        <div className="support">
          <h2 className="support-suptitle">Support service</h2>
          <h5 className="support-title">We are always ready to help you!</h5>
          <a
            href="https://www.infoworld.com/"
            target="blank"
            className="support-subtitle"
          >
            info@WORLD.TV
          </a>

          <h5 className="support-title">On copyright issues</h5>
          <a
            href="https://copyrightsworld.com/"
            target="blank"
            className="support-subtitle"
          >
            world.tv-copyright@axghouse.com
          </a>

          <h5 className="support-title">On cooperation issues</h5>
          <a
            href="https://b2bworlds.com/"
            target="blank"
            className="support-subtitle"
          >
            b2b@world.tv
          </a>
        </div>
      </div>

      <div className="footer__footer">
        <div className="footer__footer-apps">
          <h1 className="footer__footer-apps__title">Our applications</h1>
          <ul className="footer__footer-apps__menu">
            {apps.map((app) => (
              <li className="footer__footer-apps__menu-list" key={app.id}>
                {app.icon}
                <div className="footer__footer-apps__menu-desc">
                  <p className="footer__footer-apps__menu-desc-title">
                    {app.title}
                  </p>
                  <a
                    href={app.link}
                    className="footer__footer-apps__menu-desc-link"
                    target="blank"
                  >
                    {app.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__footer-social">
          <h1 className="footer__footer-social__title">
            We are in social networks
          </h1>

          <ul className="footer__footer-social__menu">
            {socialLinks.map((social) => (
              <li className="footer__footer-social__menu-list" key={social.id}>
                <a
                  href={social.link}
                  className="footer__footer-social__menu-link"
                  target="blank"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <FaRegCopyright />
        <span className="footer__copyright-title">
          WORLD.TV 2015-2022 v3.9.44. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
