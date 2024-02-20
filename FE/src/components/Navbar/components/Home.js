import React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => (
    <Link to="/" style={{textDecoration: 'none'}}>
        <div
            className="btn btn-warning ms-5 btn-home"
            style={{
                display: "flex",
                width: "64px",
                height: "32px",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Kenyan Coffee",
                fontSize: "25px"
            }}
        >
            OMDb
        </div>
    </Link>
);