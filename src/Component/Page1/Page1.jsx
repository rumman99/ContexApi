import { useContext, useEffect, useState } from 'react';
import Page2 from '../Page2/Page2';
import { passContext } from '../../App';

const fakeData= [
    {name:'Asus', category:"laptop"},
    {name:'Dell', category:"laptop"},
    {name:'Lenovo', category:"laptop"},
    {name:'Realme',category:"mobile"},
    {name:'Samsung', category:"mobile"},
    {name:'Xiaomi', category:"mobile"},
    {name:'Nikon', category:"camera"},
    {name:'Canon', category:"camera"},
    {name:'Sony', category:"camera"}
]

const Page1 = () => {
    const [category]= useContext(passContext);
    const [product, setProduct]= useState([]);
    useEffect(()=>{
        const matchProduct= fakeData.filter(pd => pd.category === category.toLowerCase());
        setProduct(matchProduct);
    }, [category])

    return (
        <div>
            <h1>Page1: {category}</h1>
            {
            product.map(pd => <Page2 product={pd.name}></Page2>)
            }
        </div>
    );
};

export default Page1;