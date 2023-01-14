import React from "react";
import Person from "./Person";

const PersonsList = ({data,deletePerson})=>{
    const ListOfPersons = data.map(person=>{
        return(
            <Person deletePerson={deletePerson} person={person} key={person.id}/>
        )
    })
return(
    <div>
        {ListOfPersons}
    </div>
)
}

export default PersonsList;