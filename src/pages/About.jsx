import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function About() {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Our Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft hover:shadow-lg
                     transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('about.story.title')}
              </h2>
              <div className="w-20 h-1 bg-primary-500 rounded-full mb-6" />
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>{t('about.story.content1')}</p>
              <p>{t('about.story.content2')}</p>
              <p>{t('about.story.content3')}</p>
            </div>
          </motion.div>

          {/* Our Values Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft hover:shadow-lg
                     transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('about.values.title')}
              </h2>
              <div className="w-20 h-1 bg-primary-500 rounded-full mb-6" />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: t('about.values.quality.title'),
                  description: t('about.values.quality.description'),
                  icon: (
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: t('about.values.innovation.title'),
                  description: t('about.values.innovation.description'),
                  icon: (
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: t('about.values.customerFocus.title'),
                  description: t('about.values.customerFocus.description'),
                  icon: (
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  )
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 dark:bg-dark-bg
                               flex items-center justify-center group-hover:bg-primary-100
                               dark:group-hover:bg-dark-card transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '13+', label: t('about.stats.experience') },
            { number: '5000+', label: t('about.stats.projects') },
            { number: '100+', label: t('about.stats.categories') },
            { number: '98%', label: t('about.stats.satisfaction') }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 text-center shadow-soft
                       hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary-500 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('about.mission.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('about.mission.content')}
            </p>
          </div>
          <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('about.vision.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t('about.vision.content')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;