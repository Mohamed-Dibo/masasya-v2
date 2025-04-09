import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone',
      details: [
        '0126595572',
        '0508575471'
      ]
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      details: [
        'mas.asya1975@gmail.com',
        'asya-trading@hotmail.com'
      ]
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Location',
      details: [
        `المملكة العربية السعودية , جدة
9268 شارع قيس ابن زهير ,
حي المنار.`
      ]
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Working Hours',
      details: [
       `الاحد: مفتوح`,
       `الاثنين: مفتوح`,
       `الثلاثاء: مفتوح`,
       `الاربعاء: مفتوح`,
       `الخميس: مفتوح`,
       `الجمعه: مغلق`,
       `السبت: مفتوح`

     
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-bg dark:to-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent 
                       bg-gradient-to-r from-primary-600 to-primary-400">
            {t('nav.contact')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          تواصل معنا لتلبية جميع احتياجاتك من المطابخ والخزائن.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">أرسل لنا رسالة.</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                             focus:ring-2 focus:ring-primary-500 focus:border-transparent
                             dark:bg-dark-bg dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الايميل
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                             focus:ring-2 focus:ring-primary-500 focus:border-transparent
                             dark:bg-dark-bg dark:text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           dark:bg-dark-bg dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           dark:bg-dark-bg dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  الرساله
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
                           focus:ring-2 focus:ring-primary-500 focus:border-transparent
                           dark:bg-dark-bg dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg
                         hover:bg-primary-600 transform hover:-translate-y-1
                         transition-all duration-200 font-medium"
              >
                ارسال
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-soft
                         hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900
                               flex items-center justify-center text-primary-500">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 dark:text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-soft"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.277807339344!2d55.2732!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMjMuNSJF!5e0!3m2!1sen!2sae!4v1625481234567!5m2!1sen!2sae"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Masasya Location"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;