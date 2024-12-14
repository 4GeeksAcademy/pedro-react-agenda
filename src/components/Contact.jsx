import { Button } from "react-bootstrap"
import { deleteContactList } from "./Calls"

function Contact({contactData,buttonFunction}){


return(
<>

<div key={contactData.id} style={{marginBottom:"5px",width:"50% " , display:"flex" , justifyContent:"space-between"}} >{contactData.slug}

        <Button  variant="outline-secondary" onClick={()=>{buttonFunction()}}> X </Button>
        </div>

  </>
  )
}

export default Contact