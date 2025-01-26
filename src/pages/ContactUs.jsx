import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ClipLoader } from 'react-spinners';

const ContactForm = () => {

    const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState(
    {
      error: "",
      success: "",
    }
  );

  useEffect(()=> {
    const timer = setTimeout(() => {
      setIsSent(false);
      setMessage({error: "", success: ""});
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSent, message])

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
   
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,form.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          setMessage({...message, success: "Thank you! Your comment has been sent."});
          form.current.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          setIsSending(false);
          setMessage(error.text);
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md" id="contact" data-aos="zoom-in-right" data-aos-easing="ease-in-out"
     data-aos-duration="1500">
      <h2 className="text-2xl font-bold mb-4 md:text-3xl text-center">Contact Us</h2>
      <form onSubmit={sendEmail} ref={form}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="w-[40%] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email address
          </label>
          <input
            type="email"
            name="user_email"   
            className="w-[40%] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium mb-2">
            Comment
          </label>
          <textarea
            name="message"
            className="w-full lg:w-[60%] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter your comment or suggestion"
            required
          />
        </div>
        {message?.error && <p className="text-red-500 mb-4">{message.error}</p>}
        {isSent && (
          <p className="text-green-500 mb-4">
            {message.success}
          </p>
        )}
        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-600 cursor-pointer px-6 py-2 rounded-lg text-white hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isSending ? <ClipLoader size={20} color={"#fff"} /> : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;