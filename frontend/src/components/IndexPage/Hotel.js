import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import ReactDOM from 'react-dom';

import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function Hotel(props) {

    const header = (
        <img alt="Card" src={props.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span style={{marginTop:'40em'}}>
            <Button label="Like" icon="pi pi-check" />
            <Button label="Dislike" icon="pi pi-times" className="p-button-secondary p-ml-2" />
        </span>
    );

    return (    
            <Card title={props.hotelName} subTitle={props.address} style={{ width: '100%', height:'40em' }} footer={footer} header={header}>
                <p className="p-m-0" style={{lineHeight: '1.5'}}>{props.dsc}</p>
            </Card>   
    )
}
  //hotelName: {
    //userName   comment rate