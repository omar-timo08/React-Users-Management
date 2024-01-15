import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, CardBody,   Container, Table } from 'reactstrap'
import axios from "axios";
const Profile = () => {
    const [mail, setMail] = useState('');
    const [groupe, setGroupe] = useState('');
    const [age, setAge] = useState('');
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const getResult = async () => {
        const r=await axios("http://localhost:8888/users-registration/getMail/"+name);
          setMail(r.data);
          const t=await axios("http://localhost:8888/users-registration/getAge/"+name );
          setAge(t.data);
          const v=await axios("http://localhost:8888/users-registration/getGroupe/"+name);
           setGroupe(v.data);
        }
        getResult()

    function redirect(){
        window.location.replace('http://localhost:3003/?name='+name)
    }
    return (
        <Card className='mt-2 border-3 rounded-3 ' style={{ margin: 'auto', maxWidth: '600px'}}>
            <CardBody>
                <h3 className='text-uppercase text-center'>Bienvenu {name}</h3>

                <Container className='text-center'>
                    <img src={require('./carte-de-donneur-de-sang.png')} width="250px" height="250px"  style={{ marginTop: '5px'}}/>
                </Container>
                <Table responsive striped hover bordered={true} className='text-center mt-5'>
                    <tbody>
                    <tr>
                        <td >
                            <b>Nom complet</b>
                        </td>
                        <td>
                            {name}
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <b>Age</b>
                        </td>
                        <td>
                            {age}
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <b>Email</b>
                        </td>
                        <td>
                            {mail}
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <b>Groupe Sanguin</b>
                        </td>
                        <td>
                            {groupe}
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
            <div className="text-center" style={{margin:"auto", marginTop:"2px", padding:"15px"}}>
                <Button  color='success' onClick={redirect}>Prendre rendez-vous</Button><br/><Button  color='danger' style={{marginTop:'10px' }} >Déconnexion</Button>
            </div>
        </Card>

    )
}
export default Profile