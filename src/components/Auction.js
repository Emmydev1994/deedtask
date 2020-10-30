import React from 'react';
import AuctionList from './AuctionList';


const Auction = ({items}) => {
    console.log(items);
    return (
        <>
            <div className="row">
                <AuctionList auctions={items}/>
            </div>
        </>
    )
};

export default Auction;