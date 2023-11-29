type Contentx ={
    linh: string;
    introduce: string;
    price: string;
  }
  const pStyle ={
    color:'orange',
  }
  const Compose = ({linh, introduce,price} : Contentx) => {
    return (
      <div>
        <img src={linh} alt="" width={300} height={180} style={{borderRadius:7}}/>
        <h3>{introduce}</h3>
        <p style={pStyle}>{price}</p>
      </div>
    )
  }
  
  export default Compose