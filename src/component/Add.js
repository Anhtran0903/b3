import React, { useState } from 'react';
import { Container, Input } from 'reactstrap';

function Add(props) {
    const {addNew}=props
    const[text,setText]=useState("")

    return (
        <div>
<Container className='mb-2'>
<h1 className='text-center'>to do list</h1>
                <Input className='p-2 ipSearch' value={text} type='text' onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>
            {
                if(e.key=="Enter"){
                  
                    addNew(text)
                    setText("")
                }
            }

                }/>
                </Container>
        </div>
        
    );
}

export default Add;