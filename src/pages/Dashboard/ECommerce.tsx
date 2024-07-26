import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import LineChart from '../../components/Charts/LineChart';
import Loader from '../../common/Loader';

import DefaultLayout from '../../layout/DefaultLayout';
import PropTypes from 'prop-types';
import { getTotalDevicesInACompany,getTotalBranches,getTotalFaultyDevices,getTotalOfflineDevices} from "../../services/devices";

const ECommerce: React.FC = (props) => {
  
  const [deviceC,setDeviceC] = useState<number>(0);
  const [branchC,setBranchC] = useState<number>(0);
  const [faultC,setFaultC] = useState<number>(0);
  const [offlineC,setOfflineC] = useState<number>(0);
  const sToken = localStorage.getItem('Token');

  const [dloading, setDloading] = useState(true); 
  const [bloading, setBloading] = useState(true); 
  const [floading, setFloading] = useState(true); 
  const [oloading, setOloading] = useState(true); 

  useEffect(() => {
    const getUserCompanyDetails = async (token: string | null) => {
      if (!token) {
        console.log("Token Not Found")
        return;
      }
      try {
        const dC = await getTotalDevicesInACompany(token);
        setDeviceC(dC.length);
        setDloading(false)
     
        const bC = await getTotalBranches(token);
        setBranchC(bC.length);
        setBloading(false)
        
        const fC = await getTotalFaultyDevices(token);
        setFaultC(fC.length);
        setFloading(false)
        
        const oC = await getTotalOfflineDevices(token);
        setOfflineC(oC.length);
        setOloading(false);

    


 

      } catch (err) {
        console.log("Failed To Dashboard Counts")
        // setError("Failed to fetch device count");
      }
      finally{
      }
    };
    getUserCompanyDetails(sToken);
  }, [sToken]);

  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {dloading ? <Loader/> : (
        <Link to="/devices" style={{ textDecoration: 'none' }}>
          <CardDataStats title="Total Devices" total={deviceC} rate="0.43%" levelUp>            
            <svg 
                className="fill-primary dark:fill-white"
                width="45"
                height="45" 
                viewBox="0 0 24 24"
                id="Layer_2" 
                version="1.1" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path d="M9.198,9.25H11.5v1.083h-1.313c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h3.625c0.276,0,0.5-0.224,0.5-0.5  s-0.224-0.5-0.5-0.5H12.5V9.25h2.302c0.824,0,1.494-0.67,1.494-1.494V4.385c0-0.824-0.67-1.494-1.494-1.494H9.198  c-0.824,0-1.494,0.67-1.494,1.494v3.371C7.704,8.58,8.374,9.25,9.198,9.25z M8.704,4.385c0-0.272,0.222-0.494,0.494-0.494h5.604  c0.272,0,0.494,0.222,0.494,0.494v3.371c0,0.272-0.222,0.494-0.494,0.494H9.198c-0.272,0-0.494-0.222-0.494-0.494V4.385z"/>
                  <path d="M8.004,15.042H3.996c-0.554,0-1.004,0.45-1.004,1.004v2.533c0,0.554,0.45,1.004,1.004,1.004H5.5v0.376H4.803  c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2.395c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H6.5v-0.376h1.504  c0.554,0,1.004-0.45,1.004-1.004v-2.533C9.008,15.492,8.558,15.042,8.004,15.042z M8.005,18.582  C8.005,18.582,8.005,18.582,8.005,18.582l-4.013-0.004l0.004-2.537l4.012,0.004L8.005,18.582z"/>
                  <path d="M20.004,15.042h-4.008c-0.554,0-1.004,0.45-1.004,1.004v2.533c0,0.554,0.45,1.004,1.004,1.004H17.5v0.376h-0.697  c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h2.395c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H18.5v-0.376h1.504  c0.554,0,1.004-0.45,1.004-1.004v-2.533C21.008,15.492,20.558,15.042,20.004,15.042z M20.005,18.582  C20.005,18.582,20.005,18.582,20.005,18.582l-4.013-0.004l0.004-2.537l4.012,0.004L20.005,18.582z"/>
                  <path d="M17.5,14.167c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-1.042c0-0.276-0.224-0.5-0.5-0.5h-5.5V12  c0-0.276-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5v0.625H6c-0.276,0-0.5,0.224-0.5,0.5v1.042c0,0.276,0.224,0.5,0.5,0.5  s0.5-0.224,0.5-0.5v-0.542H12h5.5V14.167z"/>
              </svg>
          </CardDataStats>
           </Link>
          )} 
         {bloading ? <Loader/> : (
        <Link to="/branches" style={{ textDecoration: 'none' }}>
          <CardDataStats title="Total Branches" total={branchC}  levelUp rate="43%">
              
                        <svg 
                  className="fill-primary dark:fill-white"
                  width="32"
                  height="26" 
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                      fillRule="evenodd" 
                      clipRule="evenodd" 
                      d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" 
                      />
              </svg>
            
          </CardDataStats>
        </Link>
         )}

      {floading ? <Loader/> : (
        <CardDataStats title="Faulty Devices" total={faultC} rate="2.59%" levelUp>

        <svg 
        width="800px" 
        height="800px" 
        viewBox="0 -15.89 64 64"
        xmlns="http://www.w3.org/2000/svg">
          <g id="Group_58" data-name="Group 58" transform="translate(-288 -816.195)">
            <g id="Group_52" data-name="Group 52">
              <path id="Path_116" data-name="Path 116" d="M329.137,842.372l-7.5,3.477a5,5,0,0,1-4.181.064l-21.222-9.369a2,2,0,0,1-1.022-2.637l2.423-5.489" fill="none" className="fill-primary dark:fill-white"/>
              <path id="Path_117" data-name="Path 117" d="M319.476,847.341a6.027,6.027,0,0,1-2.428-.512l-21.223-9.369a3.005,3.005,0,0,1-1.532-3.958l2.423-5.488a1,1,0,1,1,1.83.809l-2.423,5.488a1,1,0,0,0,.511,1.318L317.856,845a4,4,0,0,0,3.346-.052l7.516-3.482a1,1,0,0,1,.84,1.815l-7.5,3.476A5.959,5.959,0,0,1,319.476,847.341Z"/>
            </g>
            <g id="Group_53" data-name="Group 53">
              <path id="Path_118" data-name="Path 118" d="M306.243,821.289a5,5,0,0,0-6.593,2.555l-1.556,3.526-.463,1.048,39.537,17.454a4.78,4.78,0,0,0,6.3-2.443l.177-.4a4.781,4.781,0,0,0-2.443-6.3l-26.273-11.6Z" fill="none" className="fill-primary dark:fill-white"/>
              <path id="Path_119" data-name="Path 119" d="M339.1,847.281h0a5.743,5.743,0,0,1-2.332-.493l-40.453-17.859,2.423-5.489a6,6,0,0,1,7.912-3.065l34.964,15.434a5.781,5.781,0,0,1,2.954,7.623l-.176.4A5.789,5.789,0,0,1,339.1,847.281Zm-40.148-19.373,38.623,17.05a3.759,3.759,0,0,0,1.525.323h0a3.786,3.786,0,0,0,3.462-2.255l.176-.4a3.785,3.785,0,0,0-1.931-4.986L305.84,822.205a3.96,3.96,0,0,0-1.613-.342,4,4,0,0,0-3.662,2.386Z"/>
            </g>
            <g id="Group_54" data-name="Group 54">
              <circle id="Ellipse_18" data-name="Ellipse 18" cx="3.975" cy="3.975" r="3.975" transform="translate(332.419 829.504)" fill="none" className="fill-primary dark:fill-white"/>
              <path id="Path_120" data-name="Path 120" d="M336.4,829.5a3.975,3.975,0,1,1-3.639,2.37,3.968,3.968,0,0,1,3.639-2.37m0-2h0a5.975,5.975,0,1,0,2.41.509,5.978,5.978,0,0,0-2.41-.509Z"/>
            </g>
            <g id="Group_55" data-name="Group 55">
              <circle id="Ellipse_19" data-name="Ellipse 19" cx="3.975" cy="3.975" r="3.975" transform="translate(306.804 818.196)" fill="none" className="fill-primary dark:fill-white"/>
              <path id="Path_121" data-name="Path 121" d="M310.781,818.2a3.975,3.975,0,1,1-3.639,2.37,3.968,3.968,0,0,1,3.639-2.37m0-2h0a5.979,5.979,0,1,0,2.411.51,5.977,5.977,0,0,0-2.411-.51Z"/>
            </g>
            <g id="Group_56" data-name="Group 56">
              <line id="Line_62" data-name="Line 62" x1="2.744" y1="1.212" transform="translate(320.287 834.047)" fill="none" className="fill-primary dark:fill-white"/>
              <path id="Path_122" data-name="Path 122" d="M323.03,836.259a1,1,0,0,1-.4-.085l-2.744-1.212a1,1,0,1,1,.808-1.83l2.745,1.212a1,1,0,0,1-.406,1.915Z"/>
            </g>
            <g id="Group_57" data-name="Group 57">
              <line id="Line_63" data-name="Line 63" x1="62" transform="translate(289 847.409)" fill="none" className="fill-primary dark:fill-white"/>
              <path id="Path_123" data-name="Path 123" d="M351,848.409H289a1,1,0,0,1,0-2h62a1,1,0,0,1,0,2Z"/>
            </g>
          </g>
        </svg>

        </CardDataStats>
      )}

      {oloading ? <Loader/> : (
        <CardDataStats title="Total Offline Devices" total={offlineC} rate="0.95%" levelDown>
          <svg   
           fill="none" 
           className="fill-primary dark:fill-white"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="-4 -8 63 63" 
          enableBackground="new 0 0 52 52" 
          xmlSpace="preserve">
            <g id="SVGRepo_bgCarrier" 
          strokeWidth="0">
            </g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g>
          <g id="SVGRepo_iconCarrier">
             <g> 
            <path d="M34.7,36.1c0.5-0.5,0.5-1.3,0-1.8l-1.8-1.8c-0.5-0.5-1.3-0.5-1.8,0l-4.4,4.4c-0.3,0.3-0.9,0.3-1.2,0 l-4.4-4.4c-0.5-0.5-1.3-0.5-1.8,0l-1.8,1.8c-0.5,0.5-0.5,1.3,0,1.8l4.4,4.4c0.3,0.3,0.3,0.9,0,1.2l-4.4,4.4c-0.5,0.5-0.5,1.3,0,1.8 l1.8,1.8c0.5,0.5,1.3,0.5,1.8,0l4.4-4.4c0.3-0.3,0.9-0.3,1.2,0l4.4,4.4c0.5,0.5,1.3,0.5,1.8,0l1.8-1.8c0.5-0.5,0.5-1.3,0-1.8 l-4.4-4.4c-0.3-0.3-0.3-0.9,0-1.2L34.7,36.1z"></path>
          <path d="M47.7,11.6c-5.5-6.1-13.3-9.5-21.6-9.5S10,5.5,4.5,11.6C4.1,12,4.2,12.7,4.6,13l3,2.6C8,16,8.6,15.9,9,15.5 c4.4-4.7,10.6-7.4,17.1-7.4s12.7,2.7,17.1,7.4c0.4,0.4,1,0.4,1.4,0.1l3-2.6C48,12.6,48.1,12,47.7,11.6z"></path> 
          <path d="M26.1,16.1c-4.2,0-8.2,1.8-11,5c-0.4,0.4-0.3,1.1,0.1,1.5l3.2,2.4c0.4,0.3,1,0.3,1.3-0.1 c1.7-1.8,4-2.8,6.4-2.8s4.7,1,6.3,2.7c0.3,0.4,0.9,0.4,1.3,0.1l3.2-2.4c0.5-0.4,0.5-1,0.1-1.5C34.3,17.9,30.3,16.1,26.1,16.1z"></path>
           </g>
           </g>
          </svg>

        </CardDataStats>
      )}


      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <LineChart />
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          {/* <TableOne /> */}
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;

ECommerce.propTypes = {
  devicesCount: PropTypes.number
} 

ECommerce.defaultProps = {
  devicesCount: 0
}


