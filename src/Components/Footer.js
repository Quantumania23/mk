import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark
   font-medium text-lg dark:text-light dark:border-light sm:text-base'
   >
    <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2'>
            Built With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
            by&nbsp;
            <Link href="https://github.com/quantumania23"
             className='text-dark underline dark:text-light md:text-base hover:no-underline cursor-pointer'
            target={"_blank"}
            >Quantumania23
            </Link>
        </div>
        <Link
        href="https://www.bbc.com/news/topics/c207p54m4rqt"
        className='text-dark underline dark:text-light md:text-base hover:no-underline cursor-pointer'
        target={"_blank"}
      >
        Peace
      </Link>
    </Layout>
   </footer>
  )
}

export default Footer
