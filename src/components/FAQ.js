"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];
const FAQ = () => {
  return (
    <div className="my-20 w-full md:w-3/4 flex justify-between items-center gap-20 flex-col md:flex-row  ">
      {/* left side  */}
      <div className="w-full md:w-1/2">
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 opacity-60">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>

      {/* right side */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl ">How we can help you ?</h1>
        <p className="mt-10 opacity-60">
          Follow our newsletter. We will regulary update our latest project and
          availability.
        </p>
        <div className="flex w-full justify-center gap-4 mt-7">
          <input
            className="bg-gray w-3/4 rounded-3xl px-3 py-2 text-sm "
            placeholder="Enter your email"
            type="text"
          />
          <button className="bg-blue w-1/4 px-3 py-1 rounded-3xl text-white text-sm">
            Lets Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
