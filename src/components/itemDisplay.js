
const Item = (props) => {
    return <>
            <div className= 'ui tiny image' style={{margin:`${14}px`}} >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNUbJzHsKxJZMFOttSrteR5_KbuLk89kvhw&usqp=CAU' />
            </div>
            <div className='content' style={{padding:`${16}px`}} >
                <h3 className="header">{props.Title}</h3>
                
                <div className="description">
                    <p>Title:{props.Title}</p>
                    <p>Author:{props.Author}</p>
                    <p>Duedate:{props.Duedate}</p>
                    {props.Fine===0? null:<p>Fine:{props.Fine}</p>}
                </div>
            </div>
        </>
    
}

export default Item