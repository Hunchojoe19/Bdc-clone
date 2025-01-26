import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !comment) {
      setError("Please fill in all fields.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      // Replace these with your EmailJS credentials
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "your-email@example.com", // Replace with your email
          from_email: email,
          message: comment,
        },
        publicKey
      );

      setIsSent(true);
      setEmail("");
      setComment("");
    } catch (err) {
      setError("Failed to send the comment. Please try again.");
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 md:text-3xl text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[60%] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium mb-2">
            Comment or Suggestion
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter your comment or suggestion"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {isSent && (
          <p className="text-green-500 mb-4">
            Thank you! Your comment has been sent.
          </p>
        )}
        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-600 px-6 py-2 rounded-lg text-white hover:bg-blue-700 disabled:bg-blue-400"
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;