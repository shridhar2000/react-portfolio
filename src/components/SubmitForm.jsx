import React, { useState } from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter} from 'react-icons/fa6'


const iconVariants = (duration) => ({
  initial: {y: -3},
  animate: {
      y: [3, -3],
      transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: 'reverse',
      }
  }
})


const SubmitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
        'service_cbdhvwp', // Your EmailJS service ID
        'template_mdi34xys', // Your EmailJS template ID
        {
          user_name: formData.name,  // This maps to {{user_name}} in the template
          user_email: formData.email,  // This maps to {{user_email}} in the template
          message: formData.message,   // This maps to {{message}} in the template
          from_name: formData.name,    // Pass the recipient's name to from_name placeholder
          to_name: 'Shridhar',   // This could be the static recipient name or dynamic
        },
        '4pKUA2o7rPd1NKYnS' // Your EmailJS User ID (public key)
      )
        .then(() => {
          setSuccess(true);
          setError(false);
          setFormData({ name: '', email: '', message: '' });
        })
        .catch(() => {
          setError(true);
          setSuccess(false);
        })
        .finally(() => setLoading(false));
    };

  return (
    <div className='antialiased'>
      <div 
      id='contact-us'
      className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white'>
          <div className='flex flex-col justify-between'>
            <div>
              <motion.h1 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='font-bold text-4xl tracking-wide'>Get in Touch</motion.h1>
              <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='pt-2 text-white text-sm'>
                If you think I'd be a good fit, feel free to connect with me!
              </motion.p>
            </div>
            <div className='text-center tracking-tighter'>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='my-4 flex items-center gap-2'>
                    <FaMapMarkerAlt className='text-gray-500' />
                    {CONTACT.address}
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='my-4 flex items-center gap-2'>
                    <FaPhoneAlt className='text-gray-500' />
                    {CONTACT.phoneNo}
                </motion.p>

                <motion.a 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    href={`mailto:${CONTACT.email}`} 
                    className='flex items-center gap-2 my-4 '>
                    <FaEnvelope className='text-gray-500' />
                    {CONTACT.email}
                </motion.a>
                </div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial= {{ opacity:0, x: -100 }}
            transition= {{ duration: 1.5}} 
            className='flex items-center gap-4 text-2xl'>
                        <motion.a 
                        initial= 'initial'
                        animate= 'animate'
                        variants={iconVariants(2.5)}
                        href="https://www.linkedin.com/in/shridhar-n-755027266"
                           target='_blank'
                           rel='noopener noreferrer'
                           aria-label='LinkedIn'>
                            <FaLinkedin />
                        </motion.a>
                        <motion.a 
                        initial= 'initial'
                        animate= 'animate'
                        variants={iconVariants(3)}
                        href="/404"
                           target='_self'
                          //  rel='noopener noreferrer'
                           aria-label='GitHub'>
                            <FaGithub />
                        </motion.a>
                        <motion.a 
                        initial= 'initial'
                        animate= 'animate'
                        variants={iconVariants(5)}
                        href="/404"
                           target='_self'
                          //  rel='noopener noreferrer'
                           aria-label='Instagram'>
                            <FaInstagram />
                        </motion.a>
                        <motion.a 
                        initial= 'initial'
                        animate= 'animate'
                        variants={iconVariants(2)}
                        href="/404"
                           target='_self'
                          //  rel='noopener noreferrer'
                           aria-label='Twitter'>
                            <FaSquareXTwitter />
                        </motion.a>
            
                    </motion.div>
          </div>
          <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
           className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-[500px] lg:w-[500px]'>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
              <div>
                <label className='text-sm'>Your Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outlined-none focus:ring-teal-300'
                  required
                />
              </div>
              <div>
                <label className='text-sm'>Email Address</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleChange}
                  className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outlined-none focus:ring-teal-300'
                  required
                />
              </div>
              <div>
                <label className='text-sm'>Message</label>
                <textarea
                  name='message'
                  placeholder='Enter a message'
                  value={formData.message}
                  onChange={handleChange}
                  className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outlined-none focus:ring-teal-300'
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`inline-block self-end bg-red-300 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm transition duration-300 ease-in-out ${
                  loading ? "cursor-not-allowed opacity-50" : "hover:bg-red-500 hover:shadow-lg"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
            {success && <p className='text-green-500 mt-2'>Message sent successfully!</p>}
            {error && <p className='text-red-500 mt-2'>Failed to send message. Please try again.</p>}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
