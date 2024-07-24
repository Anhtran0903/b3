
import React, { useEffect, useState } from 'react'
import { Button, Container, Input, Table } from 'reactstrap'
import axios from 'axios'
export default function Students() {

    const [data, setData] = useState([])
    const url = "https://66a0a2837053166bcabc1470.mockapi.io/students"
    const [isedit, setEdist] = useState({ id: "", flag: false });
    const [texta, setTexta] = useState("")
    const [text, setText] = useState('');
    const getStudent = () => {





        axios({
            method: 'get',
            url: url,


        })
            .then(function (res) {
                setData(res.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        getStudent();

    }, [])
    const deleteS = (id) => {
        axios({
            method: 'delete',
            url: url + "/" + id,


        })
            .then(function (res) {
                setData(data.filter(item => item.id !== id))


            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const updateS = (id, namea, age) => {
        axios({
            method: 'put',
            url: url + "/" + id,
            data: {
                name: namea
            }
        })
            .then(function (res) {
                setData(data.map(item => item.id === id ? { ...item, name: namea } : item))

            })
            .catch(function (error) {
                console.log(error)
            })
    }



    const addNew = (text) => {
        axios({
            method: 'post',
            url: url,
            data: {
                name: text
            }

        })
            .then(function (res) {
                setData([...data, { id: res.data.id, name: text }])

            })
            .catch(function (error) {
                console.log(error)
            })
    }




    return (
        <div>

            <Container>

                <h1>to do list </h1>
                <Input className='p-2 ipSearch' value={text} type='text' onChange={(e) => setText(e.target.value)} onKeyDown={(e) => {
                    if (e.key == "Enter") {

                        addNew(text)
                        setText("")
                    }
                }

                } />

                <Table
                    bordered
                    dark
                    size=""
                    striped
                >
                    <thead>
                        <tr><th>
                            #
                        </th>
                            <th>
                                name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data && data.map((item, index) => (
                                <tr>
                                    <th scope="row" >
                                        {index + 1}
                                    </th>
                                    <td>

                                        {
                                            isedit.id === item.id && isedit.flag === true ?
                                                <Input type='text' value={texta} onChange={(e) => setTexta(e.target.value)} onKeyDown={(e) => {
                                                    if (e.key == "Enter") {
                                                        setEdist({ id: item.id, flag: false });
                                                          updateS(item.id,texta)
                                                        //   rename(Student.id,text);
                                                    }

                                                }} />   :
                                                 <p id='tt' onDoubleClick={() => {
                                                    setEdist({ id: item.id, flag: true })
                                                    setTexta(item.name)
                                                }}>   {item.name}  </p>
                                        }


                                    </td>
                                    <td>
                                        {item.age}
                                    </td>
                                    <td>
                                        <Button onClick={() => deleteS(item.id)}>delete</Button>
                                        <Button onClick={() =>  setEdist({ id: item.id, flag: true })}>edit</Button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>


            </Container>
        </div>
    )
}
