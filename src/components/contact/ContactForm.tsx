"use client";

import { useContact } from "@/lib/hooks/useContact";

export default function ContactForm() {
  const { register, handleSubmit, onSubmit, errors } = useContact();

  return (
    <main className="col-span-3 w-full h-auto shadow-xl dark:border shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2 dark:text-gray-300">
                Name
              </label>
              <input
                className=" border-2 rounded-lg p-3 flex border-gray-300 dark:text-gray-300"
                type="text"
                placeholder="your name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col py-2 dark:text-gray-300">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              placeholder="email@company.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col py-2 dark:text-gray-300">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              placeholder="subject"
              {...register("subject")}
            />
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>
          <div className="flex flex-col py-2 dark:text-gray-300">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows={10}
              placeholder="write your message here"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-4 text-black dark:text-gray-300 mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
