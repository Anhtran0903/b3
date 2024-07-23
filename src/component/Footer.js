import React from 'react';
import { Button, Container } from 'reactstrap';

function Footer(props) {
    const{setFlag,deleteAll}=props
    return (
      
        <div>

        <Container>
            <div>

                <Button onClick={()=>setFlag("check")}>seleect check</Button>
                <Button onClick={()=>setFlag("no")}>seleect no</Button>
                <Button onClick={()=>setFlag("clear")}> seleect all</Button>
                <Button onClick={()=>deleteAll("detele")}>detele check</Button>

            </div>

        </Container>


        </div>
    );
}

export default Footer;

