import { useEffect, useState } from 'react';
import Web3 from 'web3';
import "./test1.css";

function Test1() {
    const [account, setAccount] = useState(); // state variable to set account.

    useEffect(() => {
    async function load() {
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);
    }
    load();
    }, []);

    return (
        <div >
            <button id='btn_test' >
            Your account is: {account}
            </button>
        </div>
    );
}

export default Test1;