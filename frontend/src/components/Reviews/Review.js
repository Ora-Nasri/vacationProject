import React from 'react';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export default function Review(props) {
    return(
            <Card title={props.hotelName} subTitle={props.userName} style={{ width: '100%', height:'40em' }} >
                <p className="p-m-0" style={{lineHeight: '1.5'}}>{props.comment}</p>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>{props.rate}</p>
            </Card>  
    )
}
