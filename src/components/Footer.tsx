import React from 'react'
import {Link} from 'react-router-dom'
import DateDisplay from '../components/DateDisplay'

const Footer: React.FC = () => {
    return (
        <footer style={{ color: 'white', textDecoration:'none', backgroundColor:'#243346', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <nav>
              <Link style={{color: 'white', textDecoration:'none'}} to='sitemap'>Site Map</Link>
              &nbsp;|&nbsp;
              Copyright © 2018-2022 AI-ROX Polytronics Co., Ltd. All Rights Reserved.
              &nbsp;|&nbsp;
              <Link style={{color: 'white', textDecoration:'none'}} to='privacypol'>Privacy Policy</Link>
            </nav>
        </footer>
    )
}

export default Footer
// <DateDisplay />
/**
 *         <div style={{ color: 'white', 
 *                       textDecoration:'none',
 *                       backgroundColor:'grey',
 *                       position: 'relative',
 *                       width: '100%',
 *                       display: 'flex',
 *                       justifyContent: 'center',
 *                       alignItems: 'center',
 *                       flexDirection: 'column' }}>
 * 
 */