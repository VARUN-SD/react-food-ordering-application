import { useState } from "react";

const Contact = () => {
  
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: ""});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev,[name]: value,}));  //name refers to all four formdata keys
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();      //prevents the browser default page reload after submitting  
    setSubmitted(true);
    setFormData({name: "", email: "", subject: "", message: ""}); // after submitting clears the filled areas
    console.log("Contact form data:", formData);  //getting the filled info... later we will retreive in backend
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <title>Contact Us Page</title>
      {/* Hero */}
      <section className="bg-linear-to-r from-orange-50 to-amber-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-14 sm:px-8 md:flex-row md:py-20">
          <div className="max-w-2xl">
            <p className="font-semibold tracking-widest text-orange-600"> GET IN TOUCH </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"> Contact Us </h1>
            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Have a question, suggestion, or feedback? We would love to hear
              from you. Send us a message and let us know how we can improve
              your restaurant discovery experience. </p>
          </div>
          <span className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full
              bg-white text-7xl shadow-md sm:h-52 sm:w-52 sm:text-8xl"> 💌 </span>
        </div>
      </section>

      {/* Contact form and details */}
  <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
      {/* Form */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
        <h2 className="text-2xl font-bold text-gray-900"> Send Us a Message </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500"> Fill in the details below to share your thoughts with us. </p>

        {submitted && (
          <div role="status"
            className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700"
            > Thank you for your response! The form was submitted successfully. </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-gray-700"
                  > Full Name <label className="text-red-500">*</label></label>
            <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} 
                    placeholder="Enter your name" autoComplete="name" required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-gray-700" > Email Address <label className="text-red-500">*</label> </label>
            <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange}
                   placeholder="you@example.com" autoComplete="email" required
                   className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none
                    transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"/>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700" > Subject<label className="text-red-500">*</label>  </label>
            <select name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 
                    outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
              <option value="" disabled> Select a subject </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Restaurant Information"> Restaurant Information </option>
              <option value="Feedback">Feedback</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-gray-700"
                        > Message <label className="text-red-500">*</label></label>
            <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange}
                       placeholder="Write your message here..." rows={5} required
                       className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 
                       outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"/>
          </div>

          <button type="submit" className="w-full rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-sm 
                 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                  > Send Message → </button>
        </form>
      </div>

      {/* Contact details */}
      <aside className="space-y-6 lg:col-span-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900"> Other Ways to Reach Us </h2>

          <div className="mt-8 space-y-7">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl"> ✉️ </span>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <a href="mailto:varundara98@gmail.com"
                  className="mt-1 text-sm text-orange-600 hover:underline" > varundara98@gmail.com </a>
                <p className="mt-1 text-sm text-gray-500"> Send us your questions or feedback. </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl"> 📞 </span>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="mt-1 text-sm text-gray-600"> Contact support by phone </p>
                <p className="mt-1 text-sm text-orange-600 hover:underline"> +91 9182367210 </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-xl"> 📍 </span>
              <div>
                <h3 className="font-semibold text-gray-900"> Our Location </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600"> In your heart ❤️ </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-orange-400 p-6 text-white shadow-sm sm:p-8">
          <span className="text-3xl">❤️</span>
          <h2 className="mt-3 text-xl font-bold"> Your Feedback Matters </h2>
          <p className="mt-3 text-sm leading-6 text-orange-50">
            Your suggestions help us make the app easier to use and more enjoyable for every food lover. </p>
        </div>
      </aside>
    </div>
  </section>
</main>

);
};

export default Contact;
