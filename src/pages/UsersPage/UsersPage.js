import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../../components/UserList/UserList';
import UserDetails from '../../components/UserDetails/UserDetails';
import styles from './UsersPage.module.css';
import { ClipLoader } from 'react-spinners';

function UsersPage() {
    const [users,setUsers]= useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [failedRequest,setFailedRequest]=useState(false)

    useEffect(()=> {
      const getUsers= async ()=>{
        try {
          const response = await axios.get("https://random-data-api.com/api/v2/users?size=10");
          setUsers(response.data);
        } catch (error) {
            setFailedRequest(true);
          console.error('getUsers request failed:', error);
        } finally {
            setLoading(false);
        }
      };

      getUsers();
    }, []);

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                {failedRequest ?(
                    <div className={styles.centeringContainer}>
                        <h2>Something went wrong. Please refresh the page.</h2>
                    </div>
                ):loading ? (
                    <div className={styles.centeringContainer}>
                        <ClipLoader/>    
                    </div>
            ): selectedUser ? (
                <UserDetails user={selectedUser} onBack={() => setSelectedUser(null)}/>
            ) : (
                <UserList users={users} onSelectUser={setSelectedUser}/>
            )}
            </div>
        </div>
      
    );
}

export default UsersPage