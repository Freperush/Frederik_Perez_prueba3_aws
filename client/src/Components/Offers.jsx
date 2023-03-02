import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Offers = () =>{

    const [ OfferList, setOfferList ] = useState([]);
    let navigation = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/users")
        .then((Offers) => setOfferList(Offers.data))
        .catch((err) => console.log(err))
    }, []);

    const updateOfferDom = (OfferId) =>{
        setOfferList(OfferList.filter(Offer => Offer._id !== OfferId));
    }

    const deleteHandler = (OfferId) =>{
        axios.delete('http://localhost:8000/api/user/' + OfferId)
            .then( res => {
                console.log(res);
                updateOfferDom(OfferId);
            })
            .catch( err => console.log(err))
    }

    return(
        <div>
            <h1>Job Offers</h1>
            <Link to={'/api/offer/new'}><button> Add Offer</button></Link>
    
            {
                OfferList.map((Offer, i) =>{
                    return <p key={i}>
                     <div> {Offer.jobName} - {Offer.earn}</div>
                       <div>
                       <Link to={'/api/offer/' + Offer._id}><button>View Offer</button> </Link>

                        <button onClick={(e)=>deleteHandler(Offer._id)}>Delete Offer</button>
                       </div>
     
                    </p> 
                })
            }
            
        </div>
    );
}


export default Offers;