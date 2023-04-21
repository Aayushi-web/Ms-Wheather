
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <section className="text-gray-600 body-font bg-gradient-to-r from-blue-100 via-blue-300 to-yellow-20">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-72 overflow-hidden shadow-md shadow-blue-500">
        <img alt="content" className="object-cover object-center h-full w-full" src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-20406,msid-96181166/us-weather-forecast-nationwide-winter-storm-expected-to-produce-tornadoes-and-blizzard-conditions.jpg"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded inline-flex items-center justify-center bg-gray-200 text-gray-400">
           
           <img src='https://akm-img-a-in.tosshub.com/businesstoday/images/story/202304/modi_1200x768-sixteen_nine.jpg?size=948:533'/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Modi Jii</h2>
            <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
            <p className="text-base">I am Narendra Modi and I am very glad that I follow Ms Wheather to get accurate information of a Wheather "Toh bhaiyo ewam behano Ms.Wheather ko hi follow kare!!".</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Welcome to MS Weather, your go-to app for accurate and up-to-date weather information. Stay informed about the weather conditions in your area and plan your day accordingly with our user-friendly interface and reliable forecasts. From sunny skies to thunderstorms, MS Weather has got you covered. Download the app today and never be caught off guard by the weather again.</p>
          <a className="text-blue-500 inline-flex items-centerName">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
