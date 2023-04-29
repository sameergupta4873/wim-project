import React from 'react'

const SecondaryButton = ({text} : any) => {
  return (
    <button className='px-16 py-1 max-sm:px-10 max-sm:py-1 max-sm:text-xs text-xl rounded-full border-[4px] border-white/20 max-md:px-14 max-md:py-1 max-md:text-sm max-xl:py-1 max-xl:px-16'>
        {text}
    </button>
  )
}

export default SecondaryButton