import React from 'react'
import Link from 'next/link'

const CallToAction = ({ text }) => {
  return (
    <section className="container mb-[160px]">
          <div>
            <div className="py-[50px] text-center max-w-[1000px] my-0 mx-auto px-[24px] md:py-[120px] flex flex-col items-center gradient rounded-[18px]">
              <div className="mb-[40px]">
                <h1 className="font-bold md:text-5xl mb-4 md:leading-[62px] text-[28px] leading-[36px] text-white">
                  Ready to start teaching?
                </h1>
                <p className="md:text-2xl text-gray-300 leading-[24px] text-base">
                  Use Klas to create and manage your online academy
                </p>
              </div>
              <Link className="md:text-[20px] font-medium rounded-3xl py-[14px] px-[28px] text-purple-100 md:leading-[28px] md:py-[16px] md:px-[50px] bg-white" href="/signup">
                {text}
              </Link>
            </div>
          </div>
        </section>
  )
}

export default CallToAction