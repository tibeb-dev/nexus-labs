import React from 'react';
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ContactCard = () => {
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillChatSquareTextFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Chat with us</h5>
                <p>
                  We have got live Social Experts waiting to help you{' '}
                  <strong>Monday to Saturday</strong>
                </p>
              </div>
              <a
                href="https://wa.me/+251909740768"
                className="btn btn-link mt-auto"
                target="_blank"
              >
                Chat with us
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Email Us</h5>
                <p>
                  Simply drop us an email at{' '}
                  <strong> kidussintayehu60@gmail.com </strong>
                  and you will receive a reply within 24 hours
                </p>
              </div>
              <a
                href="mailto:kidussintayehu60@gmail.com"
                className="btn btn-primary mt-auto"
              >
                Email Us
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Give us a call</h5>
                <p>
                  Give us a ring.Our Experts are standing by{' '}
                  <strong>Monday to Friday</strong>
                </p>
              </div>
              <a href="https://wa.me/+251909740768" className="btn btn-link mt-auto">
                +251 909 74 07 68
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
