
const Page2 = (props) => {
    const name= props.product;
    console.log(name)
    return (
        <div>
            <h1>Page2:</h1>
            <h1>Product: {name}</h1>
        </div>
    );
};

export default Page2;