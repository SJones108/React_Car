import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();
    // checks to see if the user is logged in, returns the children
    // (which are passed as props, whichever component is either protected or not)
    // otherwise sends them to the login route
    const SignInOnClick = async () => {
        const response = await signInWithRedirect(auth, Providers.google)
    }
    useEffect (() => {
        // function for firebase, checking if user auth has changed
        const auth_state = onAuthStateChanged(auth, (user) => {
            if (!user) {
                SignInOnClick()
                navigate("/Dashboard")
            }
        })
        return () => auth_state() 

    }, [auth, navigate])
    return (
        // takes children we're passing in, can run parallel.
        <>{children}</>
    )
}

export default AuthChecker
