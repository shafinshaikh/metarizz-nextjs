import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ContactSection() {
  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  //code to send data of form to Notion Page via API
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    if (response.ok) {
      // Handle success
      alert('Form submitted successfully', data);
    } else {
      // Handle error
      alert('Form submission error', data);
    }
  };

  return (
    <section className="contact h_5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              variants={fadeInLeftVariant}
              className="map_area"
            >
                <div className="min_map">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=metarizz%2Ctechnologies%2Cmumbai%2012&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      ></iframe>
                      <a href="https://2piratebay.org">pirate bay</a>
                      <br />
                      <a href="https://www.embedgooglemap.net"></a>
                    </div>
                  </div>
                  <div className="map_icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                </div>
                </motion.div>
          </div>
          <div className="col-lg-6">
            <div className="min_contact_area">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                variants={fadeInLeftVariant}
                className="section_title"
              >
                <h2>
                  Have any projects in mind?
                  <br /> Let’s work <br /> together
                </h2>
              </motion.div>
              <form onSubmit={handleSubmit} className="contact_form">
                <div className="row">
                  <div className="col-lg-6">
                    <motion.input
                      type="text"
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control input"
                      placeholder="Your full name"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      variants={fadeInLeftVariant}
                    />
                  </div>
                  <div className="col-lg-6">
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control input"
                      placeholder="Enter email address"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      variants={fadeInLeftVariant}
                    />
                  </div>
                  <div className="col-lg-6">
                    {/* Phone Number Field */}
                    <motion.input
                      type="tel"
                      name="phoneNumber" 
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="form-control input"
                      placeholder="Phone Number"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      variants={fadeInLeftVariant}
                    />
                  </div>
                  <div className="col-lg-6">
                    {/* Budget Field */}
                    <motion.select
                      name="budget" 
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-control input"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      variants={fadeInLeftVariant}
                    >
                      <option value="">Select Budget</option>
                      <option value="10000+">$10000+</option>
                      <option value="5000-10000">$5000 to $10000</option>
                      <option value="2500-5000">$2500 to $5000</option>
                      <option value="1500-2500">$1500 to $2500</option>
                      <option value="1000-1500">$1000 to $1500</option>
                      <option value="0-1000">$0 to $1000</option>
                    </motion.select>
                  </div>
                  <div className="col-lg-12">
                    <motion.textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control input textarea"
                      placeholder="Enter your requirement"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      variants={fadeInLeftVariant}
                    ></motion.textarea>
                    <motion.input
                      type="submit"
                      className="bg_btn_color"
                      value="Send message"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      variants={fadeInLeftVariant}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}