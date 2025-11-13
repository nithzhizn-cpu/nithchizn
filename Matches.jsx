import React, {useEffect, useState} from 'react'
import Chat from './Chat'

export default function Matches({profileId}){
    const [candidates,setCandidates]=useState([])
    const [selectedMatch,setSelectedMatch]=useState(null)
    const [myId, setMyId] = useState(profileId)

    useEffect(()=>{
        async function load(){
            if(!myId) return
            const res = await fetch('http://localhost:8000/matches/candidates/'+myId)
            const data = await res.json()
            setCandidates(data)
        }
        load()
    },[myId])

    async function like(targetId){
        if(!myId){alert('Create profile first'); return}
        await fetch('http://localhost:8000/matches/like', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({from_profile_id: myId, to_profile_id: targetId})
        })
        alert('Liked! If they liked you back — you will have a match.')
    }

    return (
        <div>
            <h2>Candidates</h2>
            {!myId && <p>Create profile first</p>}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                {candidates.map(c=>(
                    <div key={c.id} style={{border:'1px solid #ddd',padding:10}}>
                        <h3>{c.name}, {c.age}</h3>
                        <p>{c.bio}</p>
                        <button onClick={()=>like(c.id)}>Like</button>
                        <button onClick={()=>{ setSelectedMatch(c); setMyId(myId) }}>Chat</button>
                    </div>
                ))}
            </div>
            {selectedMatch && <Chat myId={myId} other={selectedMatch} />}
        </div>
    )
}
