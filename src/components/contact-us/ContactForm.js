import React from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const ContactForm = () => {
  const form = useRef(); 
  const submitForm = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_igtjksb', 'template_fy8owwq', form.current, {
        publicKey: 'e11hzOuWBY8iZNHVP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  }
  return (
    <section
      className="contact-us-form pt-60 pb-120"
      style={{
        background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
      }}
    >
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2> Drop your message and email right here, and we'll get back to you! </h2>
              <p>
                Fill out the form below and let us know what we can do for you.
              </p>
            </div>
            <form ref={form} onSubmit={submitForm} className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">
                    First name <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                </div>
                <div className="col-sm-6 ">
                  <label htmlFor="lastName" className="mb-1">
                    Last name
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="phone" className="mb-1">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Phone"
                      aria-label="Phone"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="mb-1">
                    Email<span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="user_email"
                      required
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourMessage" className="mb-1">
                    Message <span className="text-danger">*</span>
                  </label>
                  <div className="input-group mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      required
                      placeholder="How can we help you?"
                      style={{ height: '120px' }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Get in Touch
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <Image
                width={526}
                height={406}
                src="/contact-us-img-2.svg"
                alt="contact us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
