import React, {useEffect} from "react";
import moment from 'moment';
import CountDown from "./CountDown";

const AuctionList = ({auctions}) => {
    return (
        <>
            {auctions ? auctions.map((auction, index) => (
                    <div
                        key={index}
                        className="col-md-4"
                        style={{marginBottom: '5px', marginTop: '10px'}}
                    >
                        <div className="card">
                            <img  className="card-img-top float-left" src={auction.pictures}
                                 alt={auction.tags}/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Title: {auction.title}
                                </h5>
                                <p className="card-text">
                                    Start-Time:{moment(auction.start_time).format('LLL')}
                                    <br/>
                                    <br/>
                                    <CountDown endTime={auction.end_time}/>
                                </p>
                                <p className="card-text">
                                    Followers: {auction.participants.length}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            ) : (
                <div>
                    Sorry, no auctions now please come back later
                </div>
            )
            }
        </>
    )
};

export default AuctionList;
