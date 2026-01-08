import { useState } from "react";
import './sure.css';
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields before submitting!");
      return;
    }

    // Only here if valid
    alert("Thankyou so Much for reaching out! Ill get back to you as soon as possible!");

    // Clear the input fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form  id="inguireF"  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Your Message / Inquiry"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
