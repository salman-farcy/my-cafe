
import profile from '../../assets/images/profile.png'

const Header = () => {
     return (
          <header className='flex-wrap flex justify-between items-center py-5 border-b-2 '>
               <h1 className='text-2xl font-bold text-center '>Knowledge Cafe</h1>
               <img src={profile} alt="" />
          </header>
     );
};

export default Header;