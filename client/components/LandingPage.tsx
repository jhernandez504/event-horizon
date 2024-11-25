import React, {FC} from 'react';
import  {Link} from 'react-router-dom';

type LandingProps = {
  user: Object | null;
  handleLogin: Function;
};
const LandingPage: FC<LandingProps> = ({user, handleLogin}) => {

  return (
    <div className='pt-5' aria-label="Landing Page">
      <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] dark:bg-black flex flex-col items-center justify-center min-h-screen h-full text-white pt-5'>
          <img className='w-2/3 transform: scale-90' src='https://i.imgur.com/8mBos8V.png'/>
          {user && (
                  <Link
                  to="/title-menu"
                  type="button"
                  className='w-96 py-6 text-2xl p-3 bg-gradient-to-tr from-zinc-900 to-yellow-300 text-white shadow-yellow-300 rounded-lg shadow-sm text-center hover:bg-none hover:bg-yellow-700'
                >
                  Play!
                </Link>
                )}
        <div className='p-5 w-3/4 font-bold text-justify'>
          {/* <div className='text-4xl text-center'>EVENT HORIZON</div> */}
          <br></br>
          <p>In a not too distant future, warring factions compete to mine powerful yet volatile dark matter crystals to fuel their warp engines for interstellar travel. This practice leads to the frequent formation of singularity events.</p>
          <br></br>
          <p>When two ships are caught in the pull of a black hole, the only hope for escape is to try and detonate the other's warp core--if one can create a warp breach, it will trigger a shockwave to propel the surviving ship with enough escape velocity to cross the boundary of the event horizon. The space vessels must inevitably battle, or both shall be pulled into void...</p>
          <br></br>
          <div className='justify-center justify-items-center flex bg-transparent'>
            {!user && (
                  <Link
                  to="/login"
                  type="button"
                  onClick={() => handleLogin()}
                  className='w-96 py-6 text-2xl p-3 bg-gradient-to-t from-green-300 to-emerald-600 text-white shadow-emerald-500 rounded-lg shadow-sm text-center hover:bg-none hover:bg-emerald-900'
                >
                  Sign Up / Login
                </Link>
                )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;