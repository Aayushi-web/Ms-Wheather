import React from 'react'

const About = () => {
  return (<>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Our Wheather GALLERY</h1>
{/* '      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Weather gall/ery/s/.</p>' */}
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full rounded object-cover h-full object-center block shadow-lg shadow-blue-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RabCStR3w2sYXbXyywoxhB5d5MQC94Ig3qa87dpbmS-ECsVm6hxOSaW6ZZb83MxXTIw&usqp=CAU"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="shadow-lg shadow-blue-500 rounded w-full object-cover h-full object-center block" src="https://i0.wp.com/epic7travel.com/wp-content/uploads/2023/01/Things-to-Do-in-Nuuk-Greenland-Hans-Egede-Statue-and-Houses-USE-AS-HEADLINE-IMAGEJPG.jpg?resize=1000%2C667&ssl=1 "/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className=" shadow-lg shadow-blue-500 rounded w-full h-full object-cover object-center block" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/fc/ce/72/img-20160101-162023-hdr.jpg?w=700&h=500&s=1"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full rounded">
          <img alt="gallery" className="shadow-lg shadow-blue-500 rounded w-full h-full object-cover object-center block" src="https://www.excel.london/cdn/w_512/new-london-pic.jpg"/>
          
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="shadow-lg shadow-blue-500 rounded w-full object-cover h-full object-center block" src="https://www.fodors.com/wp-content/uploads/2022/08/shutterstock_144040816.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="shadow-lg shadow-blue-500 rounded w-full object-cover h-full object-center block rou" src="https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2015/06/kolkata-e1435226992355.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
    <div className="  justify-between my-10 flex flex-wrap -mx-4 -mb-10 text-center overflow-hidden">
    
      <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left mr-10 ml-5 overflow-hidden">
        <div className='sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 underline'>ABOUT US</div>
          <p className="leading-relaxed text-lg mb-4">Welcome to MS Weather, your go-to app for accurate and up-to-date weather information. Stay informed about the weather conditions in your area and plan your day accordingly with our user-friendly interface and reliable forecasts. From sunny skies to thunderstorms, MS Weather has got you covered. Download the app today and never be caught off guard by the weather again.</p>
          <a className="text-blue-500 inline-flex items-centerName">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
    </div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className=" shadow-lg shadow-blue-500 object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8&w=1000&q=80"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">300+ happy customers </h2>
        <p className="leading-relaxed text-base">When customers are happy with your product or service, they are more likely to come back again in the future. This is important because it's much easier and cheaper to retain existing customers than to acquire new ones.</p>
        <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">Blogs</button>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className=" shadow-lg shadow-blue-500 object-cover object-center h-full w-full" src="https://i.pinimg.com/736x/ab/11/77/ab11777c199296b1e63f36cb2d6dde85.jpg"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">200+ Accurate prediction</h2>
        <p className="leading-relaxed text-base">We do have team in which we are actively looking for  predict most satisfing and accurate wheather.</p>
        <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">Click us</button>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About
