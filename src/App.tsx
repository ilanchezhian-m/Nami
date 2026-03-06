import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurantData } from './data/menu';
import { ChefHat, Phone, Languages, Leaf, Clock, MapPin, UtensilsCrossed, Star, Coffee } from 'lucide-react';

type Language = 'en' | 'ta';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const { menu, restaurant, contact, ui, info } = restaurantData;

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ta' : 'en');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 20 } }
  };

  const fontClass = lang === 'ta' ? 'tamil-text' : 'font-sans';

  return (
    <div className={`min-h-screen relative overflow-hidden py-6 sm:py-12 px-4 sm:px-6 lg:px-8 selection:bg-orange-200 selection:text-orange-900 ${fontClass}`}>

      {/* Dynamic Background Decor */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-[#FAF8F5]"></div>
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-60">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-orange-300/30 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-amber-200/30 blur-[120px]"
        />
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-orange-400/10 blur-[90px]" />
      </div>

      <div className="max-w-4xl mx-auto">

        {/* Top Controls */}
        <div className="flex justify-end mb-4 sm:mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-white/70 hover:bg-white backdrop-blur-md border border-stone-200 text-stone-800 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all z-20"
          >
            <Languages size={18} className="text-orange-500" />
            <span className="font-bold text-sm tracking-wide">
              {lang === 'en' ? 'தமிழ்' : 'English'}
            </span>
          </motion.button>
        </div>

        <div className="glass-panel rounded-[2rem] sm:rounded-[3rem] overflow-hidden">

          {/* Header Section */}
          <div className="relative p-10 sm:p-20 text-center overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615486171448-4fb376b3383a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent"></div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="flex justify-center mb-8 relative z-10"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-5 rounded-3xl shadow-2xl shadow-orange-500/30 border border-white/20">
                <ChefHat size={48} className="text-white drop-shadow-md" />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${lang}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`font-black tracking-tight mb-5 relative z-10 drop-shadow-lg ${lang === 'ta' ? 'text-4xl sm:text-5xl leading-tight' : 'text-5xl sm:text-7xl'}`}
              >
                {restaurant[lang].name}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`tagline-${lang}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative z-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
              >
                <Leaf size={16} className="text-orange-400" />
                <span className="text-lg sm:text-xl text-orange-50 font-medium tracking-wide">
                  {restaurant[lang].tagline}
                </span>
                <Leaf size={16} className="text-orange-400" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${lang}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-6 text-stone-300 max-w-xl mx-auto tracking-wide relative z-10 font-medium leading-relaxed"
              >
                {restaurant[lang].description}
                <br />
                {/* <span className="text-orange-300 mt-2 inline-block">
                  {info[lang].bulkOrders}
                </span> */}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`badges-${lang}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 relative z-10 text-stone-300 text-sm font-medium"
              >
                <div className="flex items-center gap-2 bg-green-900/40 text-green-300 border border-green-700/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Leaf size={16} className="text-green-400" /> {info[lang].dietary}
                </div>
                <div className="flex items-center gap-2 bg-stone-900/50 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-stone-800/80 transition-colors">
                  <UtensilsCrossed size={16} className="text-orange-400" /> {info[lang].services}
                </div>
                <div className="flex items-center gap-2 bg-stone-900/50 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-stone-800/80 transition-colors">
                  <Clock size={16} className="text-orange-400" /> {info[lang].timing}
                </div>
                <div className="flex items-center gap-2 bg-stone-900/50 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-stone-800/80 transition-colors">
                  <MapPin size={16} className="text-orange-400" /> {info[lang].location}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Menu Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="p-6 sm:p-14 space-y-16 sm:space-y-20 bg-white/50"
          >

            {/* Lunch Special */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 shadow-inner">
                  <Star size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">
                  <AnimatePresence mode="wait">
                    <motion.span key={`lunch-title-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {ui[lang].lunchTitle}
                    </motion.span>
                  </AnimatePresence>
                </h2>
                <div className="h-px bg-gradient-to-r from-orange-200 to-transparent flex-1 rounded-full ml-4"></div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-[2rem] transform translate-y-2 translate-x-2 -z-10 transition-transform group-hover:translate-y-3 group-hover:translate-x-3"></div>
                <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-orange-100 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-4 mb-6">
                    <AnimatePresence mode="wait">
                      <motion.h3 key={`lunch-name-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-2xl sm:text-3xl font-black text-orange-600 tracking-tight">
                        {menu.lunch_special[lang].name}
                      </motion.h3>
                    </AnimatePresence>
                    <span className="text-2xl sm:text-3xl font-black text-stone-800 bg-orange-50 px-5 py-2 rounded-2xl shadow-sm border border-orange-100">
                      ₹{menu.lunch_special.price}
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.p key={`lunch-items-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-stone-600 text-lg sm:text-xl font-medium leading-relaxed flex flex-wrap gap-2">
                      {menu.lunch_special[lang].items.map((item, i) => (
                        <span key={item} className="inline-flex items-center">
                          {item}
                          {i < menu.lunch_special[lang].items.length - 1 && <span className="text-orange-300 mx-3">•</span>}
                        </span>
                      ))}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.section>

            {/* Variety Rice */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-inner">
                  <UtensilsCrossed size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">
                  <AnimatePresence mode="wait">
                    <motion.span key={`variety-title-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {ui[lang].varietyTitle}
                    </motion.span>
                  </AnimatePresence>
                </h2>
                <div className="h-px bg-gradient-to-r from-amber-200 to-transparent flex-1 rounded-full ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {menu.variety_rice.map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                    <AnimatePresence mode="wait">
                      <motion.div key={`variety-item-${i}-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 pr-4">
                        <h3 className="text-xl font-bold text-stone-800 group-hover:text-amber-600 transition-colors">
                          {item[lang].name}
                        </h3>
                        {item[lang].extra && (
                          <p className="text-sm font-medium text-stone-500 mt-1 inline-flex items-center gap-1 bg-stone-100 px-2 py-0.5 rounded-md">
                            <Leaf size={12} className="text-green-500" />
                            {item[lang].extra}
                          </p>
                        )}
                      </motion.div>
                    </AnimatePresence>
                    <div className="text-xl sm:text-2xl font-black text-amber-600 whitespace-nowrap bg-amber-50 px-4 py-2 rounded-xl group-hover:bg-amber-100 transition-colors">
                      ₹{item.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Tiffin Items */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 shadow-inner">
                  <Coffee size={24} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-800">
                  <AnimatePresence mode="wait">
                    <motion.span key={`tiffin-title-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {ui[lang].tiffinTitle}
                    </motion.span>
                  </AnimatePresence>
                </h2>
                <div className="h-px bg-gradient-to-r from-orange-200 to-transparent flex-1 rounded-full ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {menu.tiffin_items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-stone-100 shadow-sm hover:shadow-md hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                    <AnimatePresence mode="wait">
                      <motion.div key={`tiffin-item-${i}-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 pr-4">
                        <h3 className="text-xl font-bold text-stone-800 group-hover:text-orange-600 transition-colors">
                          {item[lang].name}
                        </h3>
                        <p className="text-sm font-semibold text-stone-500 mt-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                          {item[lang].quantity}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                    <div className="text-xl sm:text-2xl font-black text-orange-600 whitespace-nowrap bg-orange-50 px-4 py-2 rounded-xl group-hover:bg-orange-100 transition-colors">
                      ₹{item.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </motion.div>

          {/* Footer Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-stone-900 border-t-4 border-orange-500 p-10 sm:p-16 text-center text-white"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-md">
                <Phone size={28} className="text-orange-400" />
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight">
                <AnimatePresence mode="wait">
                  <motion.span key={`contact-title-${lang}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {contact[lang].callLabel}
                  </motion.span>
                </AnimatePresence>
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              {contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="text-xl sm:text-2xl font-black text-stone-900 bg-white hover:bg-orange-500 hover:text-white hover:scale-105 transition-all px-8 py-4 rounded-2xl shadow-xl border border-white/20 w-full sm:w-auto text-center"
                >
                  {phone.slice(0, 5)} {phone.slice(5)}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        <div className="text-center py-8 text-stone-400 text-sm font-medium">
          © {new Date().getFullYear()} Nami's Kitchen. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
