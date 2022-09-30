import markWebb from './assets/avatar-mark-webber.webp'
import angelaGray from './assets/avatar-angela-gray.webp'
import thopmson from './assets/avatar-jacob-thompson.webp'
import annaKim from './assets/avatar-anna-kim.webp'
import nathan from './assets/avatar-nathan-peterson.webp'
import rizky from './assets/avatar-rizky-hasanuddin.webp'
import smith from './assets/avatar-kimberly-smith.webp'
import chess from './assets/image-chess.webp'

function App() {
  return (
    <div className=" w-full min-h-screen p-10 bg-light-gray-blue-1 text-base">
      <div className='container mx-auto max-w-4xl bg-white p-5 rounded-2xl drop-shadow-md'>
        <div className='flex justify-between items-center mb-10'>
          <h1 className='text-2xl font-extrabold text-dark-gray-blue-2'>
            Notifications
            <span className='ml-4 px-3 py-1 rounded-md bg-primary-blue text-white'>3</span>
          </h1>
          <button className='text-dark-gray-blue-1 hover:text-primary-blue' >Mark all as read</button>
        </div>

        <div>
          <div className='flex items-start gap-5 px-5 rounded-md drop-shadow-md py-5 bg-light-gray-blue-2 mb-5'>
            <div className='w-14 h-14'>
              <img 
                className='w-full'
                src={markWebb} 
                alt='Mark Webber '
              />
            </div>
            <div>
              <div className=' text-dark-gray-blue-1 relative'>
                <span className='text-dark-gray-blue-2 font-extrabold hover:text-primary-blue cursor-pointer'>
                  Mark Webber 
                </span> reacted to your recent post <span className='text-dark-gray-blue-1 font-bold hover:text-primary-blue cursor-pointer'> 
                  My first tournament today!
                </span>
                <span className='absolute top-2 -right-3 w-2 h-2 bg-primary-red rounded-full'></span>
              </div>
              <div className='text-gray-blue'>
                1 m ago
              </div>
            </div>
          </div>

          <div className='flex items-start gap-5 px-5 rounded-md drop-shadow-md py-5 bg-light-gray-blue-2 mb-5'>
            <div className='w-14 h-14'>
              <img 
                className='w-full'
                src={angelaGray} 
                alt='Angela Gray'
              />
            </div>
            <div>
              <div className=' text-dark-gray-blue-1 relative'>
                <span className='text-dark-gray-blue-2 font-extrabold hover:text-primary-blue cursor-pointer'>
                  Angela Gray
                </span> followed you
                <span className='absolute top-2 -right-3 w-2 h-2 bg-primary-red rounded-full'></span>
              </div>
              <div className='text-gray-blue'>
                5 m ago
              </div>
            </div>
          </div>

          <div className='flex items-start gap-5 px-5 rounded-md drop-shadow-md py-5 bg-light-gray-blue-2 mb-5'>
            <div className='w-14 h-14'>
              <img 
                className='w-full'
                src={thopmson} 
                alt='Jacob Thompson'
              />
            </div>
            <div>
              <div className=' text-dark-gray-blue-1 relative'>
                <span className='text-dark-gray-blue-2 font-extrabold hover:text-primary-blue cursor-pointer'>
                  Jacob Thompson
                </span> has joined your group <span className='text-primary-blue font-bold hover:text-primary-blue cursor-pointer'> 
                  Chess Club
                </span>
                <span className='absolute top-2 -right-3 w-2 h-2 bg-primary-red rounded-full'></span>
              </div>
              <div className=' text-gray-blue'>
                1 day ago
              </div>
            </div>
          </div>
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
