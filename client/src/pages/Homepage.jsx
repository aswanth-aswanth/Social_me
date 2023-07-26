import React from 'react'
import styles from '../styles/homepage.module.css';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Newpost from '../components/Newpost';
import Post from '../components/Post';
import Leftnav from '../components/Leftnav';
import Yourfriends from '../components/Yourfriends';
import Suggestedfriends from '../components/Suggestedfriends';
import Rightchat from '../components/Rightchat';
function Homepage() {
    return (
        <div className={`${styles.grid_parent} `}>
            <div className={`${styles.grid_child}`}>
                <Header/>
            </div>
            <div className={`${styles.grid_child} ${styles.grid_parent2} bg-[#E6ECF8] mx-4 rounded-3xl grid_parent2 `}>
                <div className={`${styles.grid_child} ${styles.grid_child1} `}><Stories/></div>
                <div className={`${styles.grid_child} ${styles.grid_child2} ${styles.grid_parent3} mt-[50px]`}>
                    <div className={`${styles.grid_parent3_child} grid_parent3_child1 relative`}><Leftnav/></div>
                    <div className={`${styles.grid_parent3_child} grid_parent3_child2`}><Newpost/>
                    <Post/>
                    </div>
                    <div className={`${styles.grid_parent3_child} grid_parent3_child3`}><Yourfriends/> <Suggestedfriends/> </div>
                </div>
                <div className={`${styles.grid_child} ${styles.grid_child3} bg-[#D9E5FB] mt-20  rounded-tl-3xl p-3`}><Rightchat/></div>
            </div>
        </div>
    )
}

export default Homepage
