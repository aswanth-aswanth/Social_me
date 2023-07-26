import React from 'react'
import styles from '../styles/homepage.module.css';
import Header from '../components/Header';
function Homepage() {
    return (
        <div className={`${styles.grid_parent} `}>
            <div className={`${styles.grid_child}`}>
                <Header/>
            </div>
            <div className={`${styles.grid_child} ${styles.grid_parent2} grid_parent2`}>
                <div className={`${styles.grid_child} ${styles.grid_child1}`}></div>
                <div className={`${styles.grid_child} ${styles.grid_child2} ${styles.grid_parent3}`}>
                    <div className={`${styles.grid_parent3_child} grid_parent3_child1`}></div>
                    <div className={`${styles.grid_parent3_child} grid_parent3_child2`}></div>
                    <div className={`${styles.grid_parent3_child} grid_parent3_child3`}></div>
                </div>
                <div className={`${styles.grid_child} ${styles.grid_child3}`}></div>
            </div>
        </div>
    )
}

export default Homepage
