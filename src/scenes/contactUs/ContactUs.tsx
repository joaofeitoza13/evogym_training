import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { HText, SelectedPage } from "@/shared";
import { EvolveText, ContactUsPageGraphic } from "@/assets";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const initialFormData = {
  name: "joao",
  email: "joao@email.com",
  message: "testando o form",
};

export const ContactUs = ({ setSelectedPage }: Props) => {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);

  const inputStyles =
    "mt-2 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";

  const {
    register,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendFormData = (formData: FormData): void => {
    console.log(formData);
    fetch("https://formsubmit.co/ajax/795d405474dbfbf51a6b245a8fe12315", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text-plain, */*",
      },
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      return;
    }
    const formData = new FormData(e.target);

    sendFormData(formData);
    setFormData(initialFormData);
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW!</span>
          </HText>
          <p className="my-5 text-justify">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form target="_blank" onSubmit={handleSubmit} method="POST">
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" &&
                    "Invalid email pattern provided."}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
              )}
              <button
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                type="submit"
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative z-10 mt-16 basis-2/5 md:mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolveText">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
