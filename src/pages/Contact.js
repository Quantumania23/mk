import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TransitionEffect from "@/Components/TransitionEffect";
import Head from "next/head";
import Layout from "@/Components/Layout";
import AnimatedText from "@/Components/AnimatedText";
import Alert from "@/Components/Alert";
import Loader from "@/Components/Loader";
import { Canvas } from "@react-three/fiber";
import { SpotLight } from "@react-three/drei";
import UseAlert from "@/Components/Hooks/UseAlert";
import Fox from "@/models/Fox";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = UseAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setCurrentAnimation("hit");

    emailjs.send(
        process.env.NEXT_APP_EMAILJS_SERVICE_ID,
        process.env.NEXT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mike",
          from_email: form.email,
          to_email: "mikepeace981@gmail.com",
          message: form.message,
        },
        process.env.NEXT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setisLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully 😃!",
          type: "success"
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      }).catch((error) => {
        setisLoading(false);
        setCurrentAnimation("idle");
        console.log(error);

        showAlert({
          show: true,
          text: "I did not receive your message 😢",
          type: "danger"
        });
      });
  };
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <>
      <Head>
        <title>Mike&apos;s portfolio | Contact Page</title>
        <meta name="description" content="any description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TransitionEffect />
      <main
        className="flex w-full flex-col items-center justify-center
      dark:text-light
      "
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Transforming ideas into digital reality."
            className="mb-16 !text-6xl lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />
          <section className="relative flex sm:flex-col xl:flex-row md:flex-col  max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)];">
            {alert.show && <Alert {...alert} />}

            <div className="flex-1 min-w-[50%] flex flex-col">
              <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug;">Get in touch</h1>
              <form
                className="w-full flex flex-col gap-7 mt-14"
                onSubmit={handleSubmit}
                ref={formRef}
              >
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  {isLoading ? "Sending..." : "Cognize"}
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
              <Canvas
                camera={{
                  position: [0, 0, 5],
                  fov: 75,
                  near: 0.1,
                  far: 1000,
                }}
              >
                <directionalLight intensity={2.5} position={[0, 0, 1]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 10, 0]} intensity={2} />
                <SpotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={2}
                />

                <Suspense fallback={<Loader />}>
                  <Fox className="sm:scale-0.3"
                    currentAnimation={currentAnimation}
                    position={[0.5, 0.35, 0]}
                    rotation={[12.6, -0.6, 0]}
                    scale={[0.5, 0.5, 0.5]}
                  />
                </Suspense>
              </Canvas>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
