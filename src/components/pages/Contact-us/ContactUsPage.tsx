import { type ReactElement, useState, useRef, useEffect } from 'react';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

import { Formik, Form, Field, ErrorMessage, type FormikHelpers, type FieldProps } from 'formik';
import * as Yup from 'yup';

export default function ContactUsPage(): ReactElement {
  type ContactFormValues = {
    email: string;
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
    topic: string;
    message: string;
  };
  const initialValues: ContactFormValues = {
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    topic: '',
    message: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email').required('Email is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string(),
    company: Yup.string(),
    phone: Yup.string(),
    topic: Yup.string(),
    message: Yup.string().required('Message is required'),
  });

  const navItems = [
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'locations', label: 'Locations', href: '#locations-heading' },
    { id: 'careers', label: 'Careers', href: '/careers' },
    { id: 'about', label: 'About Us', href: '/about-us' },
  ];

  const topicOptions = [
    { value: 'Enterprise Solutions', label: 'Enterprise Solutions' },
    { value: 'Consulting Services', label: 'Consulting Services' },
    { value: 'Partnerships', label: 'Partnerships' },
    { value: 'Media Inquiries', label: 'Media Inquiries' },
  ];

  const [topicOpen, setTopicOpen] = useState(false);
  const topicRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (topicRef.current && !topicRef.current.contains(e.target as Node)) {
        setTopicOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  return (
    <main className="bg-background text-black dark:bg-backgroundDark dark:text-white min-h-screen flex flex-col">
      <Header navItems={navItems} ctaLabel="Get Consultation" ctaHref="/contact-us" logoSizeClass="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44" />

      <section className="flex-grow container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          {/* Left Column: Form */}
          <div className="w-full md:w-1/2">
            <div className="max-w-xl">
              <h2 className="h2-settings text-primary dark:text-secondary mb-4">Let's Connect</h2>
              <h3 className="h3-settings mb-10 leading-relaxed">
                We're here to help you navigate the future of enterprise systems. Reach out to our team of experts today.
              </h3>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values: ContactFormValues, { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>) => {
                  // TODO: replace with real submit
                  // eslint-disable-next-line no-console
                  console.log('Contact form submit', values);
                  setSubmitting(false);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="relative">
                          <Field
                            id="firstName"
                            name="firstName"
                            type="text"
                             placeholder=" "
                            className="peer w-full px-4 py-3 pt-6 bg-background dark:bg-backgroundDark placeholder-shown:bg-backgroundOne placeholder-shown:dark:bg-backgroundDarkOne border border-black dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-background focus:dark:bg-backgroundDark outline-none transition-all placeholder-transparent"
                          />
                          <label htmlFor="firstName" className="absolute left-4 top-1/2 -translate-y-1/2 px-1 transition-all duration-150 card-1-title-settings transform peer-placeholder-shown:bg-backgroundOne peer-placeholder-shown:dark:bg-backgroundDarkOne bg-background dark:bg-backgroundDark peer-placeholder-shown:scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-100">
                            First Name
                          </label>
                        </div>
                        <ErrorMessage name="firstName" component="div" className="mt-1 text-sm text-red-600" />
                      </div>

                      <div className="space-y-2">
                        <div className="relative">
                          <Field
                            id="lastName"
                            name="lastName"
                            type="text"
                             placeholder=" "
                            className="peer w-full px-4 py-3 pt-6 bg-background dark:bg-backgroundDark placeholder-shown:bg-backgroundOne placeholder-shown:dark:bg-backgroundDarkOne border border-black dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-background focus:dark:bg-backgroundDark outline-none transition-all placeholder-transparent"
                          />
                          <label htmlFor="lastName" className="absolute left-4 top-1/2 -translate-y-1/2 px-1 transition-all duration-150 card-1-title-settings transform peer-placeholder-shown:bg-backgroundOne peer-placeholder-shown:dark:bg-backgroundDarkOne bg-background dark:bg-backgroundDark peer-placeholder-shown:scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-100">
                            Last Name
                          </label>
                        </div>
                        <ErrorMessage name="lastName" component="div" className="mt-1 text-sm text-red-600" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <Field
                          id="email"
                          name="email"
                          type="email"
                           placeholder=" "
                          className="peer w-full px-4 py-3 pt-6 bg-background dark:bg-backgroundDark placeholder-shown:bg-backgroundOne placeholder-shown:dark:bg-backgroundDarkOne border border-black dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-background focus:dark:bg-backgroundDark outline-none transition-all placeholder-transparent"
                        />
                        <label htmlFor="email" className="absolute left-4 top-1/2 -translate-y-1/2 px-1 transition-all duration-150 card-1-title-settings transform peer-placeholder-shown:bg-backgroundOne peer-placeholder-shown:dark:bg-backgroundDarkOne bg-background dark:bg-backgroundDark peer-placeholder-shown:scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-100">
                          Work Email
                        </label>
                      </div>
                      <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <Field
                          id="company"
                          name="company"
                          type="text"
                           placeholder=" "
                          className="peer w-full px-4 py-3 pt-6 bg-background dark:bg-backgroundDark placeholder-shown:bg-backgroundOne placeholder-shown:dark:bg-backgroundDarkOne border border-black dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-background focus:dark:bg-backgroundDark outline-none transition-all placeholder-transparent"
                        />
                        <label htmlFor="company" className="absolute left-4 top-1/2 -translate-y-1/2 px-1 transition-all duration-150 card-1-title-settings transform peer-placeholder-shown:bg-backgroundOne peer-placeholder-shown:dark:bg-backgroundDarkOne bg-background dark:bg-backgroundDark peer-placeholder-shown:scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-100">
                          Company
                        </label>
                      </div>
                      <ErrorMessage name="company" component="div" className="mt-1 text-sm text-red-600" />
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <Field
                          id="phone"
                          name="phone"
                          type="tel"
                           placeholder=" "
                           className="peer w-full px-4 py-3 pt-6 bg-background dark:bg-backgroundDark placeholder-shown:bg-backgroundOne placeholder-shown:dark:bg-backgroundDarkOne border border-black dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-background focus:dark:bg-backgroundDark outline-none transition-all placeholder-transparent"
                        />
                        <label htmlFor="phone" className="absolute left-4 top-1/2 -translate-y-1/2 px-1 transition-all duration-150 card-1-title-settings transform peer-placeholder-shown:bg-backgroundOne peer-placeholder-shown:dark:bg-backgroundDarkOne bg-background dark:bg-backgroundDark peer-placeholder-shown:scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-100">
                          Phone
                        </label>
                      </div>
                      <ErrorMessage name="phone" component="div" className="mt-1 text-sm text-red-600" />
                    </div>

                    <div className="space-y-2">
                      <Field name="topic">
                        {({ field, form }: FieldProps<any>) => {
                          const selected = topicOptions.find((o) => o.value === field.value);
                          const displayLabel = selected ? selected.label : '';
                          const isFloating = topicOpen || !!field.value;
                          return (
                            <div ref={topicRef} className="relative">
                              <div
                                id="topic"
                                role="combobox"
                                aria-expanded={topicOpen}
                                aria-haspopup="listbox"
                                tabIndex={0}
                                 onClick={() => setTopicOpen((v) => !v)}
                                 onKeyDown={(e) => {
                                   if (e.key === 'Enter' || e.key === ' ') {
                                     e.preventDefault();
                                     setTopicOpen((v) => !v);
                                   }
                                 }}
                                className={`peer w-full px-4 py-3 pt-6 ${isFloating ? 'bg-background dark:bg-backgroundDark' : 'bg-backgroundOne dark:bg-backgroundDarkOne'} border border-black dark:border-slate-700 rounded-xl flex items-center justify-between cursor-pointer outline-none`}
                              >
                                <span className={field.value ? 'text-on-surface' : 'text-outline-variant'}>{displayLabel}</span>
                                <svg className={`h-5 w-5 ml-3 transition-transform ${topicOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>

                                {topicOpen && (
                                <ul role="listbox" aria-label="Topic" className={`absolute left-0 right-0 mt-2 z-50 ${isFloating ? 'bg-background dark:bg-backgroundDark' : 'bg-backgroundOne dark:bg-backgroundDarkOne'} rounded-xl shadow max-h-60 overflow-auto`}>
                                  {topicOptions.map((o) => (
                                    <li
                                      key={o.value || 'empty'}
                                      role="option"
                                      aria-selected={field.value === o.value}
                                      tabIndex={0}
                                      className={`px-4 py-2 cursor-pointer hover:bg-surface-container-high ${field.value === o.value ? 'bg-surface-container-highest' : ''}`}
                                      onClick={() => {
                                        form.setFieldValue('topic', o.value);
                                        setTopicOpen(false);
                                      }}
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                          form.setFieldValue('topic', o.value);
                                          setTopicOpen(false);
                                        }
                                      }}
                                    >
                                      {o.label}
                                    </li>
                                  ))}
                                </ul>
                              )}

                              <label
                                htmlFor="topic"
                                className={`absolute left-4 px-1 transition-all duration-150 card-1-title-settings transform ${
                                  isFloating
                                    ? 'top-0 -translate-y-1/2 scale-100 bg-background dark:bg-backgroundDark'
                                    : 'top-1/2 -translate-y-1/2 scale-75 bg-backgroundOne dark:bg-backgroundDarkOne'
                                }`}
                              >
                                Topic
                              </label>
                            </div>
                          );
                        }}
                      </Field>
                      <ErrorMessage name="topic" component="div" className="mt-1 text-sm text-red-600" />
                    </div>

                    <div className="space-y-2">
                      <div className="relative">
                        <Field
                          as="textarea"
                          id="message"
                          name="message"
                          placeholder=" "
                          rows={4}
                           className="peer w-full px-4 py-3 pt-6 bg-background dark:bg-backgroundDark placeholder-shown:bg-backgroundOne placeholder-shown:dark:bg-backgroundDarkOne border border-black dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent focus:bg-background focus:dark:bg-backgroundDark outline-none transition-all resize-none placeholder-transparent"
                        />
                        <label htmlFor="message" className="absolute left-4 top-1/2 -translate-y-1/2 px-1 transition-all duration-150 card-1-title-settings transform peer-placeholder-shown:bg-backgroundOne peer-placeholder-shown:dark:bg-backgroundDarkOne bg-background dark:bg-backgroundDark peer-placeholder-shown:scale-75 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-100">
                          Message
                        </label>
                      </div>
                      <ErrorMessage name="message" component="div" className="mt-1 text-sm text-red-600" />
                    </div>

                    <button
                      className="w-full md:w-auto bg-secondary hover:bg-[#006e6e] text-white font-bold py-4 px-12 rounded-full transition-all duration-200 transform active:scale-95 shadow-sm"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting…' : 'Submit Inquiry'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Right Column: Contact Info & Socials */}
          <div className="w-full md:w-1/2 flex flex-col justify-start pt-4">
            <div className="bg-backgroundOne dark:bg-backgroundDarkOne p-8 md:p-12 rounded-3xl space-y-12">
              <div>
                <h2 className="big-card-tittle-settings text-primary dark:text-secondary mb-8">Connect with us</h2>

                <div className="flex flex-wrap gap-4 mb-12">
                  <a className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group hover:bg-secondary-container transition-all" href="#">
                    <span className="material-symbols-outlined text-white text-2xl">groups</span>
                  </a>
                  <a className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group hover:bg-secondary-container transition-all" href="#">
                    <span className="material-symbols-outlined text-white text-2xl">share</span>
                  </a>
                  <a className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group hover:bg-secondary-container transition-all" href="#">
                    <span className="material-symbols-outlined text-white text-2xl">terminal</span>
                  </a>
                  <a className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group hover:bg-secondary-container transition-all" href="#">
                    <span className="material-symbols-outlined text-white text-2xl">mail</span>
                  </a>
                </div>
              </div>

                <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-secondary">alternate_email</span>
                  </div>
                  <div>
                    <p className="card-1-title-settings text-backgroundDark  dark:text-background mb-1">Email Support</p>
                    <a className="card-1-description-settings text-backgroundDark  dark:text-background hover:text-secondary transition-colors" href="mailto:info@systemedgesolutions.com">
                      info@systemedgesolutions.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-secondary">call</span>
                  </div>
                  <div>
                    <p className="card-1-title-settings text-backgroundDark  dark:text-background mb-1">Call Us Directly</p>
                    <a className="card-1-description-settings text-backgroundDark  dark:text-background hover:text-secondary transition-colors" href="tel:+15551234567">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
