import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FlagIcon from '@mui/icons-material/Flag';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from '../styles/homepage.module.css';
function Header() {
    return (
        <div className="flex items-center justify-between h-full ">
            <h3 className=' text-3xl font-bold ml-10'>Logo</h3>
            <div className='flex items-center justify-center  h-[85%] w-[530px] rounded-2xl bg-[#E6ECF8]'>
                <HomeIcon style={{fontSize:'2.5rem',color:'#7C7C7C',margin:'0 12px'}}/>
                <SearchIcon style={{fontSize:'2.5rem',color:'#7C7C7C',margin:'0 12px'}}/>
                <MessageIcon style={{fontSize:'2.5rem',color:'#7C7C7C',margin:'0 12px'}}/>
                <div className='border border-sky-400 h-[50px] w-[50px] rounded-lg bg-white mx-10'></div>
                <NotificationsIcon style={{fontSize:'2.5rem',color:'#7C7C7C',margin:'0 12px'}}/>
                <FlagIcon style={{fontSize:'2.5rem',color:'#7C7C7C',margin:'0 12px'}}/>
                <SettingsIcon style={{fontSize:'2.5rem',color:'#7C7C7C',margin:'0 12px'}}/>
            </div>
            <div className='mr-10'></div>
        </div>
    )
}

export default Header
