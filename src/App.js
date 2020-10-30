import React, {useState, useEffect} from "react";
import Auction from './components/Auction';
import api from "./apis/axios";


const App = () => {
    const [auctions, setAuctions] = useState([]);

    useEffect(async () => {
        let response = await api.get('/auction', {params: {limit: 5, state: 'pending',}});
        const {items} = response.data;
        setAuctions(items);
    }, []);
    return (
        <div className="container">
            <Auction items={auctions}/>
        </div>
    );
};


export default App;
