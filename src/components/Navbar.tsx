import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className='flex items-center justify-between flex-wrap bg-gray-900 p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/' className='font-semibold text-xl tracking-tight'>Car-azy Deals</Link>
          </div>
          <div className="block">
            <Button
              onClick={dropDown}
              className="flex items-center px-3 py-2 text-gray-200 border rounded border-blue-400 hover:text-white hover:border-white">
                <i className ="fa fa-bars"></i>
            </Button>
          </div>
          { isVisible ? (
            <div className='w-full block flex-grow items-center'>
              <div className='text-sm lg:flex-grow'>
                <Button className="p-3 m-5 bg-red-900 justify-center">
                  <div>
                    <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white'>
                      Home
                    </Link>
                  </div>
                </Button>
                <Button className="p-3 m-5 bg-red-900 justify-center">
                  <div>
                    <Link to='/about' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white'>
                      About
                    </Link>
                  </div>
                </Button>
                <Button className="p-3 m-5 bg-red-900 justify-center">
                  <div>
                    <Link to='/dashboard' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white'>
                      Dashboard
                    </Link>
                  </div>
                </Button>
                {
                  !auth.currentUser ? (
                    <Button className='p-3 m-5 bg-red-900 justify-center'>
                      <div>
                        <Link to="/" onClick={ () => { signInOnClick() }} className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
                          Log In
                        </Link>
                      </div>
                    </Button>
                  ) : (
                    <Button className='p-3 m-5 bg-red-900 justify-center'>
                      <div>
                        <Link to="/" onClick={ () => { signOutOnClick() }} className="flex place-items-center mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
                          Log Out
                        </Link>
                      </div>
                    </Button>
                  )
                }
              </div>
            </div>
          ) : (
            <></>
          )}
        </nav>
      );
      
}

export default Navbar