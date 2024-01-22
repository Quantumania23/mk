import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@/Components/Alert";
import Loader from "@/Components/Loader";
import UseAlert from "@/Components/Hooks/UseAlert";

const Contact = ({ handleClose }) => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const { alert, showAlert, hideAlert } = UseAlert();

  useEffect(() => {
    // Optionally, you can add some delay before automatically showing the popup
    // setTimeout(() => {
    //   setShowPopup(true);
    // }, 2000);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs
      .send(
        'service_rfb2t5f',
        'template_gjgq5ws',
        {
          from_name: form.name,
          to_name: "Mike",
          from_email: form.email,
          to_email: "mikepeace981@gmail.com",
          message: form.message,
        },
        '4tI8_x0TkJqchDXxg',
      )
      .then(() => {
        setisLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully 😃!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
          handleClose();
        }, 3000);
      })
      .catch((error) => {
        setisLoading(false);
        console.log(error);

        showAlert({
          show: true,
          text: "I did not receive your message 😢",
          type: "danger",
        });
      });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-3/4 md:w-2/3 lg:w-1/2 p-8 rounded-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-xl cursor-pointer focus:outline-none"
        >
          X
        </button>
        {alert.show && <Alert {...alert} />}

        <form className="w-full flex flex-col gap-7 mt-4" onSubmit={handleSubmit} ref={formRef}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
              placeholder="johndoe@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card"
              placeholder="Let me know how I can help you"
              required
              rows="4"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Cognize"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
