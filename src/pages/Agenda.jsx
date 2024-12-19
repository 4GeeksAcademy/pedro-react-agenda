import { identity, method } from "lodash"
import { useState } from "react"
import { useEffect } from "react"
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses"
import Contact from "../components/Contact"
import { refreshContactList, createContactList, deleteContactList } from "../components/Calls"
import Input from "../components/Input"
import { useNavigate } from "react-router";
import { isVisible } from "@testing-library/user-event/dist/utils"



const Agenda = () => {

    const navigate = useNavigate()

    let [contactList, setcontactList] = useState([])

    useEffect(() => {
        refreshContactList(setcontactList)
    }, [])



    return (<>

        <div class="container">
            <Input enterKeyFunction={(text) => createContactList(text, setcontactList)} />
            {contactList.map((contact) => {
                console.log(contact.slug)
                return (
                <Contact 
                openContact={() => { navigate(`/list/${contact.slug}`) }} 
                buttonFunction={() => { deleteContactList(contact.slug, contactList, setcontactList) }} 
                text={contact.slug} 
               />)
            })}
        </div>

    </>)
}

export default Agenda