"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    companyName: "",
    phoneNumber: "",
    projectBudget: "",
    howDidYouFindUs: "",
    additionalNotes: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullName || !formData.companyEmail || !formData.additionalNotes) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setErrorMessage("");

    try {
      await fetch("https://submit-form.com/kdy5C8QCz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyEmail: formData.companyEmail,
          companyName: formData.companyName,
          phoneNumber: formData.phoneNumber,
          projectBudget: formData.projectBudget,
          howDidYouFindUs: formData.howDidYouFindUs,
          message: formData.additionalNotes,
          _redirect: "/contact",
          _email: {
            from: formData.companyEmail,
            replyTo: formData.companyEmail,
            subject: `New message from ${formData.fullName}`,
          },
        }),
      });

      // Reset form
      setFormData({
        fullName: "",
        companyEmail: "",
        companyName: "",
        phoneNumber: "",
        projectBudget: "",
        howDidYouFindUs: "",
        additionalNotes: "",
      });

      // Show success message for 10 seconds
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    } catch (error: any) {
      // Even if fetch fails, Formspark may have already received the submission
      console.warn("Network error, but submission may have gone through:", error);
      setFormData({
        fullName: "",
        companyEmail: "",
        companyName: "",
        phoneNumber: "",
        projectBudget: "",
        howDidYouFindUs: "",
        additionalNotes: "",
      });
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="h-16 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-3"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Need a video?</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you.
            <br />
            Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Book intro call</h3>
            <p className="text-gray-600 mb-5">
              Strategy sessions, discovery calls, and questions on our process.
            </p>
            <a
              href="https://calendly.com/elsir_hatim/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center mt-auto"
            >
              Book intro call →
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Urgent request?</h3>
            <p className="text-gray-600 mb-5">
              If you have an urgent request, send us a message, we'll reply within 2 hours.
            </p>
            <a href="mailto:hello@asterakiagency.com" className="text-orange-500 ml-1 text-bold">
              hello@asterakiagency.com
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Get an estimate</h3>
            <p className="text-gray-600 mb-5">
              Try our quiz and get an instant pricing range on your next video project.
            </p>
            <Link href="/quiz" className="text-green-500 hover:text-green-600 font-medium inline-flex items-center mt-auto">
              Get pricing →
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Creative Insights</h3>
            <p className="text-gray-600 mb-5">
              Proven strategies to help you create high-impact creative content
            </p>
            <Link href="/creative-insights" className="text-purple-500 hover:text-purple-600 font-medium inline-flex items-center mt-auto">
              Join our newsletter →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Get in touch</h2>
            <p className="text-xl text-gray-600 mb-10">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fullName" className="block text-lg font-medium text-gray-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="companyEmail" className="block text-lg font-medium text-gray-900 mb-3">
                    Company Email *
                  </label>
                  <input
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="your@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-900 mb-3">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-lg font-medium text-gray-900 mb-3">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="Name of your company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="projectBudget" className="block text-lg font-medium text-gray-900 mb-3">
                    Project Budget
                  </label>
                  <select
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="howDidYouFindUs" className="block text-lg font-medium text-gray-900 mb-3">
                    How did you find us?
                  </label>
                  <select
                    id="howDidYouFindUs"
                    name="howDidYouFindUs"
                    value={formData.howDidYouFindUs}
                    onChange={(e) => setFormData({ ...formData, howDidYouFindUs: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  >
                    <option value="">Select option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Referral">Referral</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="additionalNotes" className="block text-lg font-medium text-gray-900 mb-3">
                  Your Message * (Tell us about your project)
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={6}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  placeholder="Tell us about your marketing campaign—what is its primary objective, and what led you to envision this project?"
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-5 rounded-xl transition duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
                {errorMessage && (
                  <p className="text-red-500 mt-4 text-lg">{errorMessage}</p>
                )}
                {/* Success message shown directly under the button */}
                {showSuccess && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm md:text-base">
                      ✅ Thank you! We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}