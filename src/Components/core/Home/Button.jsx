// import React from 'react'
// import { MdArrowOutward } from 'react-icons/md'

// const Button = ({text}) => {
//   return (
//     <div className="flex flex-row ">
//       <button type="button" className=" rounded-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium  text-md px-5 py-2.5 text-left me-2 mb-2 w-[10.5%] absolute mt-5 ml-32 text-lg">{text}</button>
//       <div className="bg-white rounded-full text-4xl border border-gray-200 shadow-lg shadow-custom-blue absolute ml-64 mt-6 cursor-pointer ">
//         <MdArrowOutward className="text-black size-9"/>
//         </div>
//     </div>
//   )
// }

// export default Button

import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Button = ({ text = "Get Started" }) => {
  return (
    <div className="inline-flex items-center">
      <button 
        type="button" 
        className="bg-emerald-600 text-white font-semibold text-sm rounded-full py-3 px-6 pr-12 relative"
      >
        {text}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 mr-1">
          <MdArrowOutward className="text-emerald-600 w-4 h-4" />
        </div>
      </button>
    </div>
  )
}

export default Button
