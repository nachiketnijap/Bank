import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import TransactionPopup from "./TransactionPopup";
const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [popup,setPopup]=useState('')
  const getTransactions = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:3000/api/account/transactions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTransactions(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

   const closePopup=()=>{
    setPopup(null)
    getTransactions()
  }

  const handlePopup=(type)=>{
    setPopup(type)
  }

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <>
    <Nav/>
    <button className="bg-red-200 p-2 mx-2 rounded" onClick={()=>handlePopup('withdraw')}>Withdraw</button>
    <button className="bg-green-200 p-2 rounded" onClick={()=>handlePopup('Deposite')}>Deposite</button>
    {popup && <TransactionPopup type={popup} onClose={closePopup}/>}
    <div className="p-4">
      <table className="min-w-full border">
        <thead className="text-left">
          <tr>
            <th className="px-2 py-2 border-b ">Transaction Type</th>
            <th className="px-2 py-2 border-b ">Amount</th>
            <th className="px-2 py-2 border-b ">Created At</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, index) => (
            <tr key={index}>
              <td className="px-2 py-2 border-b ">{item.transactionType}</td>
              <td className="px-2 py-2 border-b ">{item.amount}</td>
              <td className="px-2 py-2 border-b ">{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
};

export default Home;
