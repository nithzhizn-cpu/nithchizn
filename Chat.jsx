import React, {useEffect, useRef, useState} from 'react'

export default function Chat({myId, other}){
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('')
    const wsRef = useRef(null)
    const matchId = [myId, other.id].sort().join('-')  // simple room id

    useEffect(()=>{
        const ws = new WebSocket('ws://localhost:8000/ws/'+matchId)
        wsRef.current = ws
        ws.onmessage = (ev)=>{
            setMessages(m => [...m, {from: 'other', text: ev.data}])
        }
        return ()=> ws.close()
    },[matchId])

    function send(){
        if(!text) return
        wsRef.current.send(text)
        setMessages(m => [...m, {from:'me', text}])
        setText('')
    }

    return (
        <div style={{borderTop:'1px solid #ccc',marginTop:10,paddingTop:10}}>
            <h4>Chat with {other.name}</h4>
            <div style={{minHeight:100,border:'1px solid #eee',padding:8,overflowY:'auto'}}>
                {messages.map((m,i)=>(<div key={i} style={{textAlign: m.from==='me'?'right':'left'}}>{m.text}</div>))}
            </div>
            <div style={{display:'flex',gap:8,marginTop:8}}>
                <input value={text} onChange={e=>setText(e.target.value)} placeholder='Message...' style={{flex:1}} />
                <button onClick={send}>Send</button>
            </div>
        </div>
    )
}
