import React, { useEffect } from 'react'
import axios  from 'axios'
const BankersPage = () => {
    // const [customerData, setCustomerData]=useState([])
    const fetchCustomerData=async()=>{
       await axios.post 
    }

    useEffect(()=>{
        fetchCustomerData()
    },[])
  return (
    <div>

        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>email</th>
                    <th>created on</th>
                    <th>balance</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
    </div>
  )
}

export default BankersPage