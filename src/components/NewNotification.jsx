import React from 'react'

const NewNotification = ({userName, message, actionMessage, userImg, timeMessage, isNew}) => {
  return (
    <div 
      className={`flex items-start gap-5 px-5 rounded-md drop-shadow-md py-5 mb-5 ${isNew ? 'bg-light-gray-blue-2' : ''}`}
    >
      <div className='w-14 h-14'>
        <img 
          className='w-full'
          src={userImg} 
          alt={userName}
        />
      </div>
      <div>
        <div className=' text-dark-gray-blue-1 relative'>
          <span className='text-dark-gray-blue-2 font-extrabold hover:text-primary-blue cursor-pointer'>
            {userName}
          </span> {message} <span className='text-dark-gray-blue-1 font-bold hover:text-primary-blue cursor-pointer'> 
            {actionMessage || null}
          </span>
          {isNew && <span className='absolute top-2 -right-3 w-2 h-2 bg-primary-red rounded-full'></span>}
        </div>
        <div className='text-gray-blue'>
          {timeMessage} ago
        </div>
      </div>
    </div>
  )
}

export default NewNotification