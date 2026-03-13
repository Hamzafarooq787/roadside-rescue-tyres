'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="relative mx-auto max-w-7xl bg-[#0A0A0A] border border-[#8AE600]/30 rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <p className="text-sm text-gray-300 flex-1 pr-6">
              We use cookies to ensure you have the best experience. By clicking ‘Accept,’ you agree to our use of cookies. For more information, visit our privacy policy.
            </p>
            <div className="flex gap-3 shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAccept}
                className="bg-[#8AE600] hover:bg-[#72BE00] text-black font-semibold px-6 py-2 rounded-full transition"
              >
                ACCEPT
              </motion.button>
              <Link href="/privacy-policy" passHref>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReject}
                  className="inline-block cursor-pointer bg-transparent border border-[#8AE600]/50 hover:border-[#8AE600] text-gray-300 hover:text-white px-6 py-2 rounded-full transition"
                >
                  REJECT
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
