import React from 'react'
const ListOfItems = ({listItems, deleteHandler}) => {
    return (
        <form>
            {listItems.map((Items,index) => 
                <div  key={index}>
                    <h2>{Items}</h2>
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
            )}
        </form>
    )
}
export default ListOfItems
