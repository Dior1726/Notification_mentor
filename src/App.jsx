import markWebb from './assets/avatar-mark-webber.webp'
import angelaGray from './assets/avatar-angela-gray.webp'
import thopmson from './assets/avatar-jacob-thompson.webp'
import annaKim from './assets/avatar-anna-kim.webp'
import nathan from './assets/avatar-nathan-peterson.webp'
import rizky from './assets/avatar-rizky-hasanuddin.webp'
import smith from './assets/avatar-kimberly-smith.webp'
import chess from './assets/image-chess.webp'
import NewNotification from './components/NewNotification'
import { useState } from 'react'

const Messages = [
  {
    id: '1asd',
    userName: 'Mark Webber',
    message: 'reacted to your recent post',
    actionMessage: 'My first tournament today!',
    timeMessage: '1 m',
    isNew: true,
    userImg: markWebb
  },
  {
    id: 234234,
    userName: 'Angela Gray',
    message: 'followed you',
    actionMessage: '',
    timeMessage: '5 m',
    isNew: true,
    userImg: angelaGray
  },
  {
    id: 3234324,
    userName: 'Jacob Thompson',
    message: 'has joined your group',
    actionMessage: 'Chess CLub',
    timeMessage: '1 day',
    isNew: true,
    userImg: thopmson
  }
]

function App() {

  const [newMessages, setNewMessages] = useState(Messages)
  const [msgCount, setMsgCount] = useState(Messages.length)

  const changeMessageType = () => {
    setNewMessages((prevState) => prevState.map(msg => ({...msg, isNew: false})))
    setMsgCount(0)
  }

  return (
    <div className=" w-full min-h-screen p-10 bg-light-gray-blue-1 text-base">
      <div className='container mx-auto max-w-4xl bg-white p-5 rounded-2xl drop-shadow-md'>
        <div className='flex justify-between items-center mb-10'>
          <h1 className='text-2xl font-extrabold text-dark-gray-blue-2'>
            Notifications
            <span className='ml-4 px-3 py-1 rounded-md bg-primary-blue text-white'>{msgCount} </span>
          </h1>
          <button 
            className='text-dark-gray-blue-1 hover:text-primary-blue' 
            onClick={() => changeMessageType()}
          >
            Mark all as read
          </button>
        </div>

        <div>
          {
            newMessages.map((message) => <NewNotification key={message.id} {...message} />)
          }
        </div>

        <div className='mt-10'>
          <div className='flex items-start gap-5 px-5 py-5 mb-5'>
            <div className='w-14 h-14'>
              <img 
                className='w-full'
                src={rizky} 
                alt='Rixky '
              />
            </div>
            <div className='flex-1'>
              <div className=' text-dark-gray-blue-1 relative'>
                <span className='text-dark-gray-blue-2 font-extrabold hover:text-primary-blue cursor-pointer'>
                  Rizky Hasanuddin
                </span> sent you a private message
              </div>
              <div className='text-gray-blue'>
                5 days ago
              </div>
              <div className='border border-light-gray-blue-3 rounded-md p-5 mt-3 text-gray-blue hover:bg-light-gray-blue-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus delectus fugiat rerum veniam praesentium! Inventore fugiat soluta culpa quae non ut aliquid! Aspernatur pariatur corrupti ea saepe molestiae alias voluptatem?
              </div>
            </div>
          </div>

          <div className='flex items-start gap-5 px-5 py-5 mb-5'>
            <div className='w-14 h-14'>
              <img 
                className='w-full'
                src={smith} 
                alt='smith '
              />
            </div>
            <div className='flex-1 flex items-center justify-between'>
              <div className=' text-dark-gray-blue-1 relative'>
                <span className='text-dark-gray-blue-2 font-extrabold hover:text-primary-blue cursor-pointer'>
                  Kimberly Smith
                </span> commented on your picture
                <div className='text-gray-blue'>
                  1 week ago
                </div>
              </div>
              <div>
                <img src={chess} className='w-14 h-14' alt="" />
              </div>
              
            </div>
          </div>

          <div className='flex items-start gap-5 px-5 py-5 mb-5'>
            <div className='w-14 h-14'>
              <img 
                className='w-full'
                src={nathan} 
                alt='nathan '
              />
            </div>
            <div className='flex-1'>
              <div className=' text-dark-gray-blue-1 relative'>
                <span className='text-dark-gray-blue-2 font-extrabold hover:text-primary-blue cursor-pointer'>
                  Nathan Peterson
                </span> reacted to your recent post <span className='text-dark-gray-blue-1 font-bold hover:text-primary-blue cursor-pointer'> 
                  5 end-game strategies to increase your win rate
                </span>
              </div>
              <div className='text-gray-blue'>
                2 weeks ago
              </div>
            </div>
          </div>

          <div className='flex items-start gap-5 px-5 py-5 mb-5'>
            <div className='w-14 h-14'>
              <img 
                className='w-full'
                src={annaKim} 
                alt='annaKim '
              />
            </div>
            <div className='flex-1'>
              <div className=' text-dark-gray-blue-1 relative'>
                <span className='text-dark-gray-blue-2 font-extrabold hover:text-primary-blue cursor-pointer'>
                  Anna Kim
                </span> left the group <span className='text-primary-blue font-bold hover:text-primary-blue cursor-pointer'> 
                  Chess Club
                </span>
              </div>
              <div className='text-gray-blue'>
                2 weeks ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
