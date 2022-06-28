import {useState,useEffect} from "react"
import {getUsers} from '../services/Json.Api.Services'
export default function Users () {
    getUsers().then(value => console.log(value))

return (
    <div>

    </div>
);
}
