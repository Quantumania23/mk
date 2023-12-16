import Contact from '@/Components/Contact'
import Head from 'next/head'
import React from 'react'

const Contacts = () => {
  return (
    <>
<Head>
       <title>Quantumania23 | Contacts Page</title>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta name="description" content="any description" />
     </Head>
     <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center
      dark:text-light
      ">
        <Layout className="pt-16">
          <AnimatedText
            text="Got a problem to solve get your space suit ready and tell me what you need"
            className="mb-16 !text-5xl lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8"
          />
          <Contact/>
          </Layout>
          </main>
    </>
  )
}

export default Contacts
