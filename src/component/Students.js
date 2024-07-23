import React, { useEffect, useState } from 'react';
import Student from './Student';
import { Container, ListGroup } from 'reactstrap';
import Add from './Add';
import Footer from './Footer';

function Students(props) {
    const [flag, setFlag] = useState("")
    const [list, setList] = useState([
        {
            id: 1,
            name: "redbull",

            checked: true,

        },
        {
            id: 2,
            name: "ho van",

            checked: true,

        },
        {
            id: 3,
            name: "string",

            checked: true,

        },
        {
            id: 4,
            name: "soda",

            checked: true,

        },

    

    ])



    useEffect(()=>{
        if(localStorage.getItem("List")){
            setList(JSON.parse(localStorage.getItem("List")))
        }},[])
    const deleteId = (id) => {
        let newList =list.filter(Student => Student.id !== id)
        setList(newList)
        localStorage.setItem("List",JSON.stringify(newList))
    }
    const deleteAll = () => {
        let newList = list.filter(Student => Student.checked == false)
        setList(newList)
       localStorage.setItem("List",JSON.stringify(newList))
    }
    const recheck = (id) => {
        let newList = list.map((Stu => Stu.id === id ? { ...Stu, checked: !Stu.checked } : Stu))
        setList(newList);
       localStorage.setItem("List",JSON.stringify(newList))
    }
    const addNew = (text) => {
        let newList =[...list, { id: list.length + 2, name: text, checked: false }]
        setList(newList)
       localStorage.setItem("List",JSON.stringify(newList))
    }
    const fielList = (list, flag) => {
        if (flag == "check") {
            return list.filter(Stu => Stu.checked)
        } else if (flag == "no") {
            return list.filter(Stu => !Stu.checked)
        }
        return list;
    }
    const rename = (id,name) =>{
                    let newList = list.map(stud=>stud.id==id?{...stud,name:name}:stud)
                    setList(newList);
                   localStorage.setItem("List",JSON.stringify(newList))
    }



    return (
        <div>
            <Container>

                <Add addNew={addNew} />

                <ListGroup>
                    {
                        fielList(list, flag).map((items, index) => (
                            <Student key={index} Student={items} deleteId={deleteId} recheck={recheck} rename={rename}  />


                        ))


                    }

                </ListGroup>
                <Footer setFlag={setFlag} deleteAll={deleteAll} />
            </Container>
        </div>
    );
}

export default Students;