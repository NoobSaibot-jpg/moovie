import axios from "axios";
import React, {useState, useEffect} from 'react';
import {Card} from "./components/Card";
import {Loading} from "./components/loading/Loading";

interface IMoovie{
    emsId: string,
    emsVersionId: string,
    name: string,
    sortEms: number,
    sortPopularity: number,
    posterImage: {
        url: string,
        type:null,
        width:null,
        height:null,
    }
}

function App() {

    const [data, setData] = useState<IMoovie[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://flixster.p.rapidapi.com/movies/get-popularity',
            params: {zipCode: '90002', radius: '50'},
            headers: {
                'X-RapidAPI-Key': '0def478d5cmsh4df969549970ea4p14d16fjsn414996c02231',
                'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data.data.popularity);
            setLoading(false)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);


    if(loading){
        return <Loading/>
    }else {
        return (
            <div className="App">
                <section className="hero-section">
                    <div className="card-grid">
                        {data.map(i => <Card key={i.emsId} name={i.name} url={i.posterImage.url}/>
                        )}
                    </div>
                </section>
            </div>
        )

    }

  }

export default App;
