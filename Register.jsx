import React, {useState} from 'react'

export default function Register({setProfileId}){
    const [name,setName]=useState('')
    const [age,setAge]=useState(18)
    const [gender,setGender]=useState('other')
    const [bio,setBio]=useState('')

    async function submit(e){
        e.preventDefault()
        const payload = {name, age: Number(age), gender, bio}
        const res = await fetch('http://localhost:8000/profiles/create', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        })
        const data = await res.json()
        alert('Profile created with id: '+data.id)
        setProfileId(data.id)
        // inform Telegram WebApp if available
        if (window.Telegram && window.Telegram.WebApp){
            try{ window.Telegram.WebApp.sendData(JSON.stringify({profileId:data.id})) }catch(e){}
        }
    }

    return (
        <form onSubmit={submit} style={{display:'grid',gap:8,maxWidth:400}}>
            <h2>Register profile</h2>
            <input placeholder='Name' value={name} onChange={e=>setName(e.target.value)} required />
            <input type='number' min={18} placeholder='Age' value={age} onChange={e=>setAge(e.target.value)} required />
            <select value={gender} onChange={e=>setGender(e.target.value)}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
            </select>
            <textarea placeholder='Bio' value={bio} onChange={e=>setBio(e.target.value)} />
            <button type='submit'>Save</button>
        </form>
    )
}
