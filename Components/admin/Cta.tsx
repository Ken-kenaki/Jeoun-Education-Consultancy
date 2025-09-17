import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

const Cta = () => {
  return (
    <>
      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          className="py-16 px-4 bg-[#232E2F]"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Begin Your Educational Journey Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the many students who have successfully achieved their international education goals with our expert guidance.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D9F1F1] text-[#232E2F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-colors"
              >
                Get Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </>
  );

}

export default Cta;