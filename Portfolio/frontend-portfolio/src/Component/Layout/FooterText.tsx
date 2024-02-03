import React from 'react'

const Fotext = ({T1,T2}:any) => {
    return (
    <div>
        <h6 className="text-gray-400 font-medium">{T1}</h6>
        <ul>
            {T2.map((T2:any)=>(
                   <li className="py-2 text-sm">{T2}</li>
            ))}
        </ul>
    </div>
    )
}

export default Fotext