import React, { useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const ContactForm = () => {
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bwepqw7",  // Replace with your EmailJS Service ID
      "template_sz7ttta", // Replace with your EmailJS Template ID
      form.current,
      "mlfoqIg2jRceBTEHH"   // Replace with your EmailJS Public Key
    )
    .then(response => {
      console.log("Email sent successfully!", response);
      toast.success(
        <div className="flex items-center gap-2">
          {/* <AiOutlineCheckCircle className="text-green-500 text-xl" /> */}
          Message sent successfully!
        </div>
      );
      form.current.reset();
    })
    .catch(error => {
      console.error("Error sending email:", error);
      toast.error(
        <div className="flex items-center gap-2">
          <AiOutlineCloseCircle className="text-red-500 text-xl" />
          Failed to send message, please try again.
        </div>
      );
    });
  };

  return (
    <section className="contact-us-form pt-60 pb-120" style={{ background: "url('/shape/contact-us-bg.svg') no-repeat center bottom" }}>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      
      <div className="container">
        <div className="row justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-md-8">
            <div className="section-heading">
              <h2>Message us, we’ll reply soon!</h2>
              <p>Fill out the form below and let us know what we can do for you.</p>
            </div>
            <form ref={form} onSubmit={submitForm} className="register-form">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="mb-1">First name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="firstName" name="firstName" required placeholder="First name" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="mb-1">Last name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last name" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="phone" className="mb-1">Phone <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="phone" name="phone" required placeholder="Phone" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="mb-1">Email<span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="email" name="user_email" required placeholder="Email" />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="mb-1">Message <span className="text-danger">*</span></label>
                  <textarea className="form-control" id="message" name="message" required placeholder="How can we help you?" style={{ height: '120px' }}></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-4">Get in Touch</button>
            </form>
          </div>
          <div className="col-lg-5 col-md-10">
            <div className="contact-us-img">
              <Image width={526} height={406} src="/contact-us-img-2.svg" alt="contact us" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
