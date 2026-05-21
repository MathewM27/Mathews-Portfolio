"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto">
            Whether you need a backend engineer, a full-stack developer, or just want to connect and chat — feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Get In Touch Section */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h3>
            <p className="text-gray-200 text-sm sm:text-lg leading-relaxed">
              I'm always open to discussing new opportunities and interesting projects. Whether you need a backend engineer, a full-stack developer, or you're building something AI-powered — or just want to link and talk tech — don't hesitate to get in touch.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8 min-w-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  value: "Let's link quicker",
                  href: "https://wa.me/23059300798",
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "Send me a mail",
                  href: "mailto:futurexdesign.info@gmail.com",
                },
                {
                  icon: MessageCircle,
                  title: "LinkedIn",
                  value: "Connect with me",
                  href: "https://www.linkedin.com/in/mathews-mwangi-972839219/",
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-black border border-gray-800 rounded-2xl  transition-colors duration-200 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 bg-black border border-gray-800 rounded-xl group-hover:bg-gray-100 transition-colors">
                    <contact.icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{contact.title}</h4>
                    <p className="text-gray-400">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}