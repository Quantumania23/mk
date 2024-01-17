import Link from 'next/link'
import React from 'react'


const CTA = () => {
  return (
    <section className='w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7'>
      <p className='text-black-500 font-extrabold flex-1 text-3xl max-md:text-center dark:text-light'>Have a project in Mind ? <br
        className='sm:block hidden'
      />
      Let's build something together!
      </p>
      <Link href='/src/pages/Contact.js' className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full xl:w-auto px-5 py-2.5 text-center'>
        Contact
      </Link>
    </section>
  )
}

export default CTA
