import { identity, method } from "lodash"
import { useState } from "react"
import { useEffect } from "react"
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses"
import Contact from "../components/Contact"
import {refreshContactList,createContactList,deleteContactList} from "../components/Calls"
import Input from "../components/Input"

const agendaSlug='p3drac0'

const Agenda = () => {

    let [contactList,setcontactList]=useState([])

    useEffect(() =>{
     refreshContactList(setcontactList)
                },[])



    return (<>

<div class="container">
        <Input enterKeyFunction={(text) => createContactList(text,setcontactList)}/>
        {contactList.map((contact)=> {console.log(contact.slug) 
            return(<Contact buttonFunction={()=>{deleteContactList(contact.slug,contactList,setcontactList)}} contactData={contact}/>)})}
            </div>

    </>)
}

export default Agenda