import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch, SwitchGroup } from "@headlessui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useCreateContactInfo } from "../api/ContactApi";
import { PrivacyPolicyModal } from "../components/PrivacyPolicyModal";
import { toast } from "react-toastify";

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
};

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);

  const { user } = useAuth0();
  const navigate = useNavigate();
  const {
    mutateAsync: createContact,
    isLoading,
    isError,
    isSuccess,
  } = useCreateContactInfo();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const contactInfo = { auth0Id: user.sub, ...formData };
      try {
        await createContact(contactInfo);
        toast.success("Form successfully submitted!");
        navigate("/");
      } catch (error) {
        toast.error("Error submitting the form. Please try again.");
      }

      if (isSuccess) {
      }
    }
  };

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 py-2">
          Have questions about our car maintenance tracking and reminder system?
          Get in touch with our sales team for detailed information on our
          products, pricing, and tailored solutions. We are here to assist you
          with all your car maintenance needs.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {Object.keys(formData).map((field, idx) => (
            <div key={field} className={idx < 2 ? "" : "sm:col-span-2"}>
              <label
                htmlFor={field}
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {field
                  .split(/(?=[A-Z])/)
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")}
              </label>
              <div className="mt-2.5">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  autoComplete={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          ))}

          <SwitchGroup
            as="div"
            className="flex items-center gap-x-4 sm:col-span-2"
          >
            <div className="flex h-6 items-center gap-2">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
              <PrivacyPolicyModal />
            </div>
          </SwitchGroup>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={isLoading || !isFormValid || !agreed}
          >
            {isLoading ? "Submitting..." : "Let's talk"}
          </button>
        </div>
        {isError && (
          <p className="mt-4 text-center text-red-600">
            Error submitting the form. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
