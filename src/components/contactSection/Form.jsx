import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return;
    }

    const phoneNumber = "918920371827"; // Your WhatsApp number (including country code)
    const whatsappMessage = `Hello! 
    Name: ${name} 
    Email: ${email} 
    Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Show success toast
    toast.success("Message Sent Successfully via WhatsApp!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });

    // Clear input fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      {/* Toast Container for Notifications */}
      <ToastContainer />

      <form ref={form} onSubmit={sendWhatsAppMessage} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Enter your name"
          required
          className="h-12 rounded-lg bg-darkBrown px-3 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Enter your email"
          required
          className="h-12 rounded-lg bg-darkBrown px-3 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Your message"
          required
          className="rounded-lg bg-darkBrown p-3 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-lg hover:bg-cyan bg-darkCyan transition-all duration-500"
        >
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default Form;
