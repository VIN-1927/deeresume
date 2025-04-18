import React, { useState } from 'react'



const Animal = () => {
const [showAll, setShowAll] = useState(false)

const names =['a', 'b', 'c']

  return (
    <div>
<h1>Name</h1>

<div>
{showAll ? names.map((name, index) =><div key={index}>{name}</div>): 
names.slice(0, 2).map((name, index) => <div key={index}>{name}</div>)

}

</div>
<button onClick={() => setShowAll((prev => !prev))}>
{showAll ? 'less' :' more'}
</button>

    </div>
  )
}

export default Animal;