// import React, { useEffect, useState } from 'react'
// import "./Poll.css"

// const Poll2 = () => {

//     const [data, setData] = useState([])
//     const [hide,setHide]  = useState(false)
//     const [buttonHide,setButtonHide] = useState(false)
//     const [selectedId, setSelectedId] = useState(null);

//     const pollData = [
//         { id: 'roadside-coder', label: 'Roadside Coder', votes: 10, percentage: 43.47 },
//         { id: 'algo-agarwal', label: 'Algo Agarwal', votes: 7, percentage: 30.43 },
//         { id: 'all-the-above', label: 'All the Above', votes: 6, percentage: 26.08 }
//     ]

//     const selectedOption = (obj) => {
// setButtonHide(true)
// setHide(true)
//         const totalVotes = 24

//         const details = pollData.find((item) => item.id == obj.id)


//         const updatedPoll = pollData.map((item) => {


               
//             return (
//                 obj.id == item.id 
//                 ? { ...item, votes: item.votes + 1, percentage: (((details.votes + 1) / totalVotes) * 100).toFixed(2) } 
//                 : { ...item, percentage: ((item.votes / totalVotes) * 100).toFixed(2) }
//             )
            
//         })

//         setData(updatedPoll)

//     }

//     const removeVoteButton = () => {
//         setData([])
//         setHide(!hide)
//         setButtonHide(!buttonHide)
//         setSelectedId(null);

// }

//     return (
//         <>
//         <h3 style={{textAlign:"center", marginBottom: '10px', fontSize: '1.5rem', fontWeight: 'bold'}}>Best YT Channel to learn Frontend?</h3>
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column', gap: '20px' }}>
//             {data.length > 0 ? data.map(option => (
//                 <div key={option.id} className="poll-option" style={{ width: '300px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>

//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                         <div>
//                             <label htmlFor={option.id}>{option.label}</label>
//                         </div>

//                           <input
//                         type="radio"
//                         name="poll"
//                         id={option.id}
//                         checked={selectedId === option.id} 
//                         onChange={() => selectedOption(option)}
//                     /> {hide && <span>{`${option.votes} votes (${option.percentage})`}</span>} 
//                     </div>

//                     <div className="progress-bar" style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '5px', overflow: 'hidden', marginTop: '10px' }}>
//                         <div className="progress" style={{ width: `${option.percentage}%`, backgroundColor: '#4caf50', height: '10px' }}></div>
//                     </div>
//                 </div>
//             )) : pollData.map(option => (
//                 <div key={option.id} className="poll-option" style={{ width: '300px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>

//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                         <div>
//                             <label htmlFor={option.id}>{option.label}</label>
//                         </div>

//                          <input
//                         type="radio"
//                         name="poll"
//                         id={option.id}
//                         checked={selectedId === option.id}
//                         onChange={() => selectedOption(option)}
//                     /> {hide && <span>{`${option.votes} votes (${option.percentage})`}</span>} 
//                     </div>

//                     <div className="progress-bar" style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '5px', overflow: 'hidden', marginTop: '10px' }}>
//                         <div className="progress" style={{ width: `${option.percentage}%`, backgroundColor: '#4caf50', height: '10px' }}></div>
//                     </div>
//                 </div>
//             ))
//             }

// {buttonHide ?   <button className="remove-vote-btn" onClick={removeVoteButton} style={{ padding: '10px 20px', marginTop: '20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove Vote</button>:"" }

//         </div>
//         </>
//     )
// }

// export default Poll2
import React, { useEffect, useState } from 'react'
import "./Poll.css"

const Poll2 = () => {

    const [data, setData] = useState([])
    const [hide, setHide] = useState(false)
    const [buttonHide, setButtonHide] = useState(false)
    const [selectedId, setSelectedId] = useState(null);

    const pollData = [
        { id: 'roadside-coder', label: 'Roadside Coder', votes: 10, percentage: 43.47 },
        { id: 'algo-agarwal', label: 'Algo Agarwal', votes: 7, percentage: 30.43 },
        { id: 'all-the-above', label: 'All the Above', votes: 6, percentage: 26.08 }
    ]

    const selectedOption = (obj) => {
        setButtonHide(true)
        setHide(true)
        setSelectedId(obj.id)

        const totalVotes = 24
        const details = pollData.find((item) => item.id === obj.id)

        const updatedPoll = pollData.map((item) => {
            return (
                obj.id === item.id 
                ? { ...item, votes: item.votes + 1, percentage: (((details.votes + 1) / totalVotes) * 100).toFixed(2) } 
                : { ...item, percentage: ((item.votes / totalVotes) * 100).toFixed(2) }
            )
        })

        setData(updatedPoll)
    }

    const removeVoteButton = () => {
        setData(pollData)
        setHide(!hide)
        setButtonHide(!buttonHide)
        setSelectedId(null);
    }

    return (
        <>
            <h3 style={{ textAlign: "center", marginBottom: '10px', fontSize: '1.5rem', fontWeight: 'bold' }}>Best YT Channel to learn Frontend?</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column', gap: '20px' }}>
                {data.length > 0 ? data.map(option => (
                    <div key={option.id} className="poll-option" style={{ width: '300px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <label htmlFor={option.id}>{option.label}</label>
                            </div>

                            <input
                                type="radio"
                                name="poll"
                                id={option.id}
                                checked={selectedId === option.id}
                                onChange={() => selectedOption(option)}
                            />
                            {hide && <span>{`${option.votes} votes (${option.percentage})`}</span>}
                        </div>

                        <div className="progress-bar" style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '5px', overflow: 'hidden', marginTop: '10px' }}>
                            <div className="progress" style={{ width: `${option.percentage}%`, backgroundColor: '#4caf50', height: '10px' }}></div>
                        </div>
                    </div>
                )) : pollData.map(option => (
                    <div key={option.id} className="poll-option" style={{ width: '300px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <label htmlFor={option.id}>{option.label}</label>
                            </div>

                            <input
                                type="radio"
                                name="poll"
                                id={option.id}
                                checked={selectedId === option.id}
                                onChange={() => selectedOption(option)}
                            />
                            {hide && <span>{`${option.votes} votes (${option.percentage})`}</span>}
                        </div>

                        <div className="progress-bar" style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '5px', overflow: 'hidden', marginTop: '10px' }}>
                            <div className="progress" style={{ width: `${option.percentage}%`, backgroundColor: '#4caf50', height: '10px' }}></div>
                        </div>
                    </div>
                ))}

                {buttonHide && <button className="remove-vote-btn" onClick={removeVoteButton} style={{ padding: '10px 20px', marginTop: '20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove Vote</button>}
            </div>
        </>
    )
}

export default Poll2
