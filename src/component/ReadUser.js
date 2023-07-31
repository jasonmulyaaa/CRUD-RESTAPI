import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ReadUser = () => {
    const {id} = useParams();
    const [users, setUser] = useState([]);

    useEffect(() => {
        readUsers();
    }, []);

    const readUsers = async() => {
        const response  = await axios.get(`http://localhost:8000/users/${id}`);
        setUser(response.data);
    }


  return (
    <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <Link to={`/`} className='button is-success'>Back</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    {/* <th>No</th> */}
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    {/* <th>Action</th> */}
                </tr>
            </thead>
            <tbody>

            <tr key={users.id}>
                {/* <td>{index + 1}</td> */}
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.gender}</td>
                {/* <td>
                    <Link to={`edit/${user.id}`} className='button is-small is-info'>Edit</Link>
                    <button onClick={() => deleteUser(user.id)} className='button is-small is-danger'>Delete</button>
                </td> */}
            </tr>

            </tbody>
        </table>
    </div>
</div>
  )
}

export default ReadUser