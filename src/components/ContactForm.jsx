import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, budget, service, message } = formData;

    if (!name || !email || !budget || !service || !message) {
      toast.error("Please fill out all fields!");
      return;
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_KEY, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          budget: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col">
      <ToastContainer />
      {/* Form Header */}
      <h1 className="text-[42px] md:text-[74px] lg:text-[100px] font-bold text-white leading-none text-center lg:text-start">
        LET'S WORK
        <br />
        <span className="text-soft_gray/20">TOGETHER</span>
      </h1>

      {/* Form Body */}
      <form className="flex flex-col gap-5 mt-5 px-4" onSubmit={handleSubmit}>
        {/* Name and Email Fields */}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-base font-medium text-soft_gray mb-2">Name</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 bg-soft_gray/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange text-sm"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-base font-medium text-soft_gray mb-2">Email</h3>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your@email.com"
              className="w-full px-3 py-2 bg-soft_gray/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange text-sm"
            />
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="w-full">
          <h3 className="text-base font-medium text-soft_gray mb-2">
            Services
          </h3>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-soft_gray/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange hover:bg-soft_gray/30 hover:text-black"
          >
            <option value="" disabled>
              Select a Service...
            </option>
            <option value="web_application">Web Application</option>
            <option value="payment_integration">Payment Integration</option>
            <option value="aws_static_deployment">AWS Static Deployment</option>
            <option value="aws_cicd_deployment">AWS CI/CD Integration</option>
            <option value="mobile_apps">Mobile Apps</option>
            <option value="dashboard">Dashboard</option>
            <option value="backend_development">Backend Development</option>
          </select>
        </div>

        {/* Budget Dropdown */}
        <div className="w-full">
          <h3 className="text-base font-medium text-soft_gray mb-2">Budget</h3>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-soft_gray/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange hover:bg-soft_gray/30 hover:text-black"
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="3000-7000">₹3,000 - ₹7,000</option>
            <option value="7000-14000">₹7,000 - ₹14,000</option>
            <option value="15000+">₹15,000+</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="w-full">
          <h3 className="text-base font-medium text-soft_gray mb-2">Message</h3>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-3 bg-soft_gray/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange resize-none text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <button
            type="submit"
            className="w-full py-2 bg-orange text-white font-semibold text-lg rounded-md hover:bg-orange-dark focus:outline-none focus:ring-2 focus:ring-orange"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
