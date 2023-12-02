import { useContext } from 'react';
import { passContext } from '../../App';

const Home = () => {
    const [category, setCategory]= useContext(passContext);
    
    return(
        <div>
            <button onClick={()=>setCategory('Laptop')}>Laptop</button>
            <button onClick={()=>setCategory("Mobile")}>Mobile</button>
            <button onClick={()=>setCategory("Camera")}>Camera</button>
            <h1>Home: {category}</h1>
        </div>
    );
};

export default Home;