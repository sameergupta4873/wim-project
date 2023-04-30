import React from 'react'

const PrimaryButton = ({ text, setIsPlaying, fetchDetails, active, tv, setShowDetails }: any) => {
  return (
    <button onClick={() => {
        setIsPlaying(true);
    }} className='p-3 max-xl:p-3 max-md:p-3 max-sm:p-3 text-xl rounded-full bg-white/20 hover:bg-white/10'>
      {/* {text} */}
      {text === 'Play Now' && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 max-sm:h-4 max-sm:w-4">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>

      )}
    </button>
  )
}

export default PrimaryButton