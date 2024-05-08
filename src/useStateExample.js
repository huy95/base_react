// ex:
// 1. ramdom gift
// 2. two-way binding
// 3. todolist

import { useState } from "react";

// const gifts = [
//     'cpu i9',
//     'ram 32gb rgb',
//     'rgb keyboard'
// ]
// 1. ramdom gift
// function AppExampleUseState () {
//     const [gift, setGift] = useState();
//     const randomGift= () => {
//         const index = Math.floor(Math.random()*gifts.length);
//         setGift(gifts[index]);
//     }
//     return (
//         <div style={{ padding: 32}}> 
//         <h1>{gift || 'Chưa có phần thưởng'}</h1>
//         <button onClick={randomGift}> receive reward</button>
//         </div>
//     )
// }

// 2. two-way binding
//ex 1
// function AppExampleUseState () {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")

//     const handleSubmit = () => {
//         console.log(name, email)
//         setName(name)
//         setEmail(email)
//     }
//     console.log(name, email)
//     return (
//         <div style={{ padding: 32}}> 
//         <input value={name} onChange={e => setName(e.target.value)}/>
//         <input value={email} onChange={e=> setEmail(e.target.value)}/>
//         <button onClick={handleSubmit}> receive reward</button>
//         </div>
//     )
// }

//ex2
// const courses = [{
//     id : 1,
//     name: 'html, css'
// }, {
//     id : 2,
//     name: 'js'
// }, {
//     id: 3,
//     name: 'ReactJS'
// }


// ]
// function AppExampleUseState () {
//     const [checked, setCheck] = useState([])

//     const handleSubmit = (id) => {
//         setCheck(pre => {
//             if(checked.includes(id)){
//                 return  checked.filter(item => item !== id);
//                 } else {
//                    return [...pre, id]  
//                 }
//         })
    
//     }

//     return (
//         <div style={{ padding: 32}}> 
//             {
//                 courses.map(course => (<div key={course.id}>
//                     <input type="checkbox" 
//                         checked={checked.includes(course.id)}
//                         onChange={() =>handleSubmit(course.id)}
//                     />
//                     {course.name}
//                 </div>))
//             }
//         </div>
//     )
// }


// ex3 todolist

function AppExampleUseState () {
    const [job, setJob] = useState("")
    const [jobs, setJobs] = useState([]);

    
    const handleSetJobs = () => {
        setJobs([...jobs, job]);
        setJob("");
    }
    console.log(jobs)

    const clearJob = (nameJob) => {
        setJobs( jobs.filter(item => item !== nameJob));
    }

    return (
        <div style={{padding: 32}}>
            <div>
                <input value={job} onChange={item=> setJob(item.target.value)}/>
                <button onClick={handleSetJobs}>Add</button>

            </div>
            {
                jobs.map((j, index) => (<div key={index}>
                    - {j}
                    <button onClick={ () => clearJob(j)}>clear</button>
                </div>))
            }
        </div>
    );
}
export default AppExampleUseState;