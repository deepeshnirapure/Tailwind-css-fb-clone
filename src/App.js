
import './App.css';
import logo from './fb-logo.svg'

function App() {
  return (
    <>
    <div className="container flex flex-row justify-center items-center mt-48 ">
      <div className="left mt-[-115px] mr-[60px]">
      <img src={logo} alt="logo" className="  flex justify-start w-80 " />    
      <p className="text-3xl mx-9 ">Facebook helps you connect and share
      <br/> with the people in your life.</p>
      </div>

      <div className="right flex flex-col bg-white shadow-md  rounded-xl w-1/4 px-3 pt-2 max-h-96 mt-[-57px]">
          <input className='px-4 h-12  outline-none my-2 border border-gray-200 rounded-lg' type="text" placeholder='Email address or phone number'/>
          <input className='px-4 h-12  outline-none my-2 border border-gray-200 rounded-lg' type="text" placeholder='Password'/>
          <button className='bg-[#1877f2] hover:bg-blue-700 text-white font-bold text-xl border-none rounded-md my-2 py-3 '>Log in</button>
          <span className="text-blue-600 text-center text-sm cursor-pointer  hover:underline">Forgotten Password</span>
          <hr className=' my-4'/>
          <button className=' text-white bg-green-600 hover:bg-green-700 cursor-pointer mt-4 mb-4 py-3 text-[17px] rounded-md border-none w-64 mx-auto'>Create New Account</button>
          <span className="absolute bottom-[218px] mx-5 text-sm"><span className="font-bold hover:underline cursor-pointer">Create a Page </span> for a celebrity, brand or business.</span>
      </div>
    
    </div>
    
    </>
  );
}
export default App;
