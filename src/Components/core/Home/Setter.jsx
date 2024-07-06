import React from 'react'

const Setter = ({image, heading, para, para2}) => {
  return (
    <div>
        <div className='flex flex-row gap-10 w-30'>
            <div>
                <img src={image} alt=""  />
            </div>

            <div className="flex flex-col">
                <h1 className='text-2xl font-semibold text-black text-left mb-3'>{heading}</h1>
                <p className="text-gray-500 text-large text-left whitespace-pre-wrap">{para}</p>
                <p className="text-gray-500 text-large text-left whitespace-pre-wrap">{para2}</p>
                
            </div>
            
        </div>
    </div>
  )
}

export default Setter
