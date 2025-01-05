// import React, { useEffect, useState } from 'react';
// import "./Poll.css"

// const Poll = () => {

//     const [data, setData] = useState([])
//     const [votesPercentage, setVotesPercentage] = useState(0)
//     const [deleteItem, setDeleteItem] = useState(true)

//     const pollData = [
//         { id: 'roadside-coder', label: 'Roadside Coder', votes: 0, percentage: 0 },
//         { id: 'algo-agarwal', label: 'Algo Agarwal', votes: 0, percentage: 0 },
//         { id: 'all-the-above', label: 'All the Above', votes: 0, percentage: 0 }
//     ];

//     const selectedAnswer = (obj) => {
//         setDeleteItem(obj)
//         setVotesPercentage((count) => count + 1)

//         if (obj.id == "all-the-above") {
//             setVotesPercentage((count) => count + 2)
//             const details = data.map((item) => {
//                 return {
//                     ...item,
//                     votes: item.votes + 1,
//                     percentage: item.votes / votesPercentage * 100
//                 }
//             })
//             setData(details)


//         } else {
//             if (data.length > 0) {

//                 const updatedPoll = data.map((item) => {
//                     return item.id == obj.id ? { ...item, votes: item.votes + 1, percentage: item.votes / votesPercentage * 100 } : item
//                 })

//                 setData(updatedPoll)
//             } else {
//                 const updatedPoll = pollData.map((item) => {
//                     return item.id == obj.id ? { ...item, votes: item.votes + 1, percentage: item.votes / votesPercentage * 100 } : item
//                 })

//                 setData(updatedPoll)
//             }
//         }

//         // if (data.length > 0) {

//         //     const updatedPoll = data.map((item) => {
//         //         return item.id == obj.id ? { ...item, votes: item.votes + 1, percentage: item.votes / votesPercentage * 100 } : item
//         //     })

//         //     setData(updatedPoll)
//         // } else {
//         //     const updatedPoll = pollData.map((item) => {
//         //         return item.id == obj.id ? { ...item, votes: item.votes + 1, percentage: item.votes / votesPercentage * 100 } : item
//         //     })

//         //     setData(updatedPoll)
//         // }

//     }
//     const removeVoteButton = () => {
//         // setVotesPercentage((count) => count - 1)
//         // const details = data.map((item) => {
//         //     return (
//         //         item.id == deleteItem.id ? { ...item, votes: item.votes - 1 } : item
//         //     )

//         // })
//         // setData(details)
//         setDeleteItem(!deleteItem)


//     }
//     useEffect(() => {

//         const details = data.map((item) => {
//             return {
//                 ...item,
//                 percentage: item.votes / votesPercentage * 100
//             }
//         })

//         setData(details)
//     }, [votesPercentage])


// console.log(deleteItem)
//     return (
//         <div className="poll-container">
//             <h3>Best YT Channel to learn Frontend?</h3>
//             {data.length > 0 ? data.map(option => (
//                 <div key={option.id} className="poll-option">
//                     <input
//                         type="radio"
//                         name="poll"
//                         id={option.id}
//                         defaultChecked={option.checked || false}
//                         onChange={() => selectedAnswer(option)}
//                     />
//                     <label htmlFor={option.id}>{option.label}</label>
//                     <span>{`${option.votes} votes (${option.percentage})`}</span>
//                     <div className="progress-bar">
//                         <div className="progress" style={{ width: option.percentage }}></div>
//                     </div>
//                 </div>

//             )) : pollData.map(option => (
//                 <div key={option.id} className="poll-option">
//                  {deleteItem ? <input
//                         type="radio"
//                         name="poll"
//                         id={option.id}
//                         defaultChecked={option.checked || false}
//                         onChange={() => selectedAnswer(option)}
//                     /> :""}   
//                     <label htmlFor={option.id}>{option.label}</label>
//                     <span>{`${option.votes} votes (${option.percentage})`}</span>
//                     <div className="progress-bar">
//                         <div className="progress" style={{ width: option.percentage }}></div>
//                     </div>
//                 </div>
//             ))
//             }

//             <button className="remove-vote-btn" onClick={removeVoteButton}>Remove Vote</button>
//         </div>
//     );
// };

// export default Poll;

import React, { useEffect, useState } from 'react';
import "./Poll.css"

const Poll = () => {

    const [data, setData] = useState([])
    const [votesPercentage, setVotesPercentage] = useState(0)
    const [deleteItem, setDeleteItem] = useState(true)
    const [hide,setHideButton]  = useState(true)

    const pollData = [
        { id: 'roadside-coder', label: 'Roadside Coder', votes: 0, percentage: 0 },
        { id: 'algo-agarwal', label: 'Algo Agarwal', votes: 0, percentage: 0 },
        { id: 'all-the-above', label: 'All the Above', votes: 0, percentage: 0 }
    ];

    const selectedAnswer = (obj) => {

        setDeleteItem(obj)
        setVotesPercentage((count) => count + 1)

        if (obj.id == "all-the-above") {
            setVotesPercentage((count) => count + 2)
            const details = data.map((item) => {
                return {
                    ...item,
                    votes: item.votes + 1,
                    percentage: item.votes / votesPercentage * 100
                }
            })
            setData(details)


        } else {
            if (data.length > 0) {

                const updatedPoll = data.map((item) => {
                    return item.id == obj.id ? { ...item, votes: item.votes + 1, percentage: item.votes / votesPercentage * 100 } : item
                })

                setData(updatedPoll)
            } else {
                const updatedPoll = pollData.map((item) => {
                    return item.id == obj.id ? { ...item, votes: item.votes + 1, percentage: item.votes / votesPercentage * 100 } : item
                })

                setData(updatedPoll)
            }
        }

    }
    const removeVoteButton = () => {
                // setVotesPercentage((count) => count - 1)
        const details = data.map((item) => {
            return (
                item.id == deleteItem.id ? { ...item, votes: item.votes - 1 } : item
            )

        })
        setData(details)
       setHideButton(!hide)
    }
    useEffect(() => {

        const details = data.map((item) => {
            return {
                ...item,
                percentage: item.votes / votesPercentage * 100
            }
        })

        setData(details)
    }, [votesPercentage])


    return (
        <div className="poll-container">
            <h3>Best YT Channel to learn Frontend?</h3>
            {data.length > 0 ? data.map(option => (
                <div key={option.id} className="poll-option">
                    {/* <input
                        type="radio"
                        name="poll"
                        id={option.id}
                        defaultChecked={option.checked || false}
                        onChange={() => selectedAnswer(option)}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                    <span>{`${option.votes} votes (${option.percentage})`}</span> */}
                       <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                   <div>
                   <label htmlFor={option.id}>{option.label}</label> 
                   </div>

                   <div>
                    {hide ? <><span> <input
                        type="radio"
                        name="poll"
                        id={option.id}
                        defaultChecked={option.checked || false}
                        onChange={() => selectedAnswer(option)}
                    />     <span>{`${option.votes} votes (${option.percentage})`}</span></span> </>: ""}
             </div>

                   </div>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: option.percentage }}></div>
                    </div>
                </div>

            )) : pollData.map(option => (
                <div key={option.id} className="poll-option">
                   
                   <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                   <div>
                   <label htmlFor={option.id}>{option.label}</label> 
                   </div>

                   <div>
                    {hide ? <><span> <input
                        type="radio"
                        name="poll"
                        id={option.id}
                        defaultChecked={option.checked || false}
                        onChange={() => selectedAnswer(option)}
                    />     <span>{`${option.votes} votes (${option.percentage})`}</span></span> </>: ""}
             </div>

                   </div>

                 

              
                     
                    
                    <div className="progress-bar">
                        <div className="progress" style={{ width: option.percentage }}></div>
                    </div>
                </div>
            ))
            }

            <button className="remove-vote-btn" onClick={removeVoteButton}>Remove Vote</button>
        </div>
    );
};

export default Poll;

