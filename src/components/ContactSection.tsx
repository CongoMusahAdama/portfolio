import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://port-p9ts.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      // Show success message
      toast.success("Message sent successfully! I'll get back to you soon.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs for name, email, message */}
      {/* Add input fields and bind their values to formData and onChange to setFormData */}
    </form>
  );
};

export default ContactSection;
