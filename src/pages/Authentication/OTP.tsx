import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';

const OTP: React.FC = (props) => {
    
    const [otp,setOTP] = useState(['','','','']);
    const navigate = useNavigate();
  
    const location = useLocation();
    const inputRefs = useRef([]);
  
    const handleOTPChange = (index, value) => {
      // Copying the array to avoid mutating state directly
      const newInputs = [...otp];
      // Only accept a single digit and ensure it's within the specified range
      if (/^\d{0,1}$/.test(value)) {
        newInputs[index] = value;
        setOTP(newInputs);
      }
      if (value.length === 1 && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };
  
    const handleSubmitOTP = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      console.log('Entered OTP:', otp);
      console.log('RECEIVED OTP IS ' , location.state.otp);
      let eneteredOtp = otp.join().replace(/,/g, '');
      if (location.state.otp==eneteredOtp){
        navigate('/pass', { state: { email:  location.state.email } });
      }else{
        console.log("Wrong OTP")
      }
    };
  return (

    <div className='flex justify-center items-center h-screen'>
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:w-1/3 xl:border-l-2">
      
   
    <div className="w-full border-stroke dark:border-strokedark">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">
            <div className="text-center">
            <Link className="mb-5.5 inline-block" to="/">
              <img className="hidden dark:block" src={Logo} alt="Logo" />
              <img className="dark:hidden" src={LogoDark} alt="Logo" />
            </Link>
            </div>
            </span>
            <h2 className="text-lg font-bold text-black text-center dark:text-white sm:text-title-xl2">
            Verify Your Account
            </h2>
        
            <p className='text-center mb-9'>We have sent a code to your email {}</p>
             

            <form>
            <div className="flex justify-between w-full max-w-xs mx-auto mb-4">
                
              
              {otp.map((input, index) => (
                  <div key={index} className="w-16 h-16 text-gray-400">
                    <input
                      ref={(ref) => (inputRefs.current[index] = ref)} 
                      className="w-full h-full text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                      type="text"
                      value={input}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                    />
                    
                  </div>)
                )}
                
            </div>
              <div className="mb-5">
                <input
                  type="submit"
                  value="Verify Email"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
              </div>
            </form>
        </div>
        </div>
    </div>
        
      
    </div>
  );
};

export default OTP;

OTP.propTypes = {
    email: PropTypes.string,
}

OTP.defaultProps = {
    email: ""
}