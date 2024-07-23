import React, { useState } from 'react';
import { Button, Input, ListGroupItem } from 'reactstrap';

function Student(props) {

const {deleteId}=props
  const {Student,recheck,rename}=props
  const [isedit,setEdist]=useState(false);
  const [text,setText]=useState(Student.name);
    return (
        <div>
            


<ListGroupItem className='d-flex justify-content-between'>
 
        <div className={Student.checked?"mt-2 active":"mt-2"}  onClick={()=>recheck(Student.id)} >

            
            
             <Input type='checkbox' checked={Student.checked}/>
             


      {
        !isedit? <p onDoubleClick={()=>setEdist(true)}>   {Student.name}  </p>    :
        <Input  type='text' value={text}   onChange={(e)=>setText(e.target.value)}  onKeyDown={(e)=>{
            if(e.key =="Enter"){
              setEdist(false);
              rename(Student.id,text);
            }

        }} />
      }


             
             
          
        
        
        
        </div>
          <span> <Button onClick={()=>deleteId(Student.id)}><i className='fa fa-close'></i></Button></span>
        </ListGroupItem>



        </div>
    );
}

export default Student;