import React, { useState, useEffect } from 'react'

const Wheather = () => {
  const [query, setQuery] = useState("")
  const [kol, setKol] = useState()
  const [mumbai, setMumbai] = useState()
  const [london, setlondon] = useState()
  const [australia, setaustralia] = useState()
  const [bang, setBang] = useState()
  const [banaras, setBanaras] = useState()
  const [weather, setWeather] = useState()
  const fetchWeather = async (query) => {
    // return (
    //   {
    //     "location": {
    //       "name": "Banaras",
    //       "region": "Uttar Pradesh",
    //       "country": "India",
    //       "lat": 25.33,
    //       "lon": 83,
    //       "tz_id": "Asia/Kolkata",
    //       "localtime_epoch": 1681897992,
    //       "localtime": "2023-04-19 15:23"
    //     },
    //     "current": {
    //       "last_updated_epoch": 1681897500,
    //       "last_updated": "2023-04-19 15:15",
    //       "temp_c": 46.6,
    //       "temp_f": 115.9,
    //       "is_day": 1,
    //       "condition": {
    //         "text": "Sunny",
    //         "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
    //         "code": 1000
    //       },
    //       "wind_mph": 15.9,
    //       "wind_kph": 25.6,
    //       "wind_degree": 273,
    //       "wind_dir": "W",
    //       "pressure_mb": 998,
    //       "pressure_in": 29.48,
    //       "precip_mm": 0,
    //       "precip_in": 0,
    //       "humidity": 7,
    //       "cloud": 8,
    //       "feelslike_c": 50.8,
    //       "feelslike_f": 123.4,
    //       "vis_km": 10,
    //       "vis_miles": 6,
    //       "uv": 11,
    //       "gust_mph": 18.3,
    //       "gust_kph": 29.5
    //     }
    //   }
    // )

    let weather = await fetch("http://api.weatherapi.com/v1/current.json?key=618778ef1e924bf3bc471851231804&q=" + query)
    let response = await weather.json()
    console.log(response)
    return response;
  }
  useEffect(() => {
    async function fetchData() {

      let kol = await fetchWeather("kolkata")
      setKol(kol)

      let mumbai = await fetchWeather("Mumbai")
      setMumbai(mumbai)

      let london = await fetchWeather("london")
      setlondon(london)

      let australia = await fetchWeather("Australia")
      setaustralia(australia)

      let bang = await fetchWeather("banglore")
      setBang(bang)

      let banaras = await fetchWeather("banaras")
      setBanaras(banaras)
    }

    fetchData();
  }, [])
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const buttonClicked = async (e) => {
    console.log(query)
    let w = await fetchWeather(query)
    console.log(w)
    setWeather(w)
  }
  return (

    <div className='container mx-auto  bg-gradient-to-r from-blue-100 via-blue-300 to-yellow-20 '>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 text-black">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0 px-10">MS Wheather</h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Search for the location to get Wheather information.</p>
              <input value={query} onChange={handleChange} className='px-4 w-full border-2 border-indigo-500 py-1 rounded m-6 ' type="text" name='Search' />
              <button onClick={buttonClicked} className="mx-10 inline-flex text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded ">Search</button>
              {weather && <div className='mb-4'>The weather of {query} is {weather.current.temp_c} and the wind speed is {weather.current.wind_mph}mph and feels like {weather.current.feelslike_c} celcius </div>}
            </div>

          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden  shadow-lg shadow-blue-500">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2015/06/kolkata-e1435226992355.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Kolkata</h2>
              <div className="text-base leading-relaxed mt-2">
                {kol && <div>The weather in kolkata is {kol.current.temp_c} and the wind speed is {kol.current.wind_mph}</div>}.</div>


            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden  shadow-lg shadow-blue-500">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://www.fodors.com/wp-content/uploads/2022/08/shutterstock_144040816.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">London</h2>
              <div className="text-base leading-relaxed mt-2">
                {london && <div>the weather of London is {london.current.temp_c} and the wind speed is {london.current.wind_mph}</div>}.</div>

            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden  shadow-lg shadow-blue-500">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://c4.wallpaperflare.com/wallpaper/494/281/254/melbourne-city-in-australia-wallpaper-preview.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Australia City</h2>
              <div className="text-base leading-relaxed mt-2">
                {australia && <div>the weather in Australia city is {australia.current.temp_c} and the wind speed is {australia.current.wind_mph}</div>}.</div>


            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden  shadow-lg shadow-blue-500">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://meetmyholiders.com/wp-content/uploads/2019/09/MMH-UP-Banaras.jpg" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Banaras City</h2>
              <div className="text-base leading-relaxed mt-2">
                {banaras && <div>the weather in Banaras is {banaras.current.temp_c} and the wind speed is {banaras.current.wind_mph}</div>}.</div>

            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden  shadow-lg shadow-blue-500">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0emZoVe2P_q8PKAqKYBDgaMpPO0_z2XBEg&usqp=CAU" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Banglore</h2>
              <div className="text-base leading-relaxed mt-2">
                {banaras && <div>the weather in Banaras is {banaras.current.temp_c} and the wind speed is {banaras.current.wind_mph}</div>}.</div>


            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden  shadow-lg shadow-blue-500">
                <img alt="content" className="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyH29KLYqY3eqIDrQUDiQ4uS-b7tVI6Rimqg&usqp=CAU" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Mumbai City</h2>
              <div className="text-base leading-relaxed mt-2">
                {mumbai && <div>the weather in Mumbai is {mumbai.current.temp_c} and the wind speed is {mumbai.current.wind_mph}</div>}.</div>


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



export default Wheather
