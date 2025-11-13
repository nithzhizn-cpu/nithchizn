import React, {useState} from 'react'
import Register from './pages/Register'
import Matches from './pages/Matches'

export default function App(){
    const [page, setPage] = useState('register')
    const [profileId, setProfileId] = useState(null)

    return (
        <div style={{fontFamily:'Arial',padding:20,maxWidth:800,margin:'0 auto'}}>
            <header style={{display:'flex',gap:10,marginBottom:20}}>
                <button onClick={()=>setPage('register')}>Register</button>
                <button onClick={()=>setPage('matches')}>Matches</button>
            </header>
            {page==='register' && <Register setProfileId={setProfileId} />}
            {page==='matches' && <Matches profileId={profileId} />}
        </div>
    )
}
