import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ViewUser = () =>{
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, [])
    const loadUser = async () =>{
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    return(
        <div className = "container py-4">
            <Link className ="btn btn-primary" to = "/">Back to Home</Link>
            <h1 className ="display-4">View User: {id}</h1>
            <hr />
            <ul className ="list-group w-50">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">User Name: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Phone No.: {user.phone}</li>
                <li className="list-group-item">Website: {user.website}</li>
            </ul>
        </div>
    )
}

export default ViewUser