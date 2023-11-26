type IProduct = {
    name: string;
    thumb: string;
    price: number;
    promoPrice?: number
}

const SingleProduct = ({name, thumb, price, promoPrice=0}: IProduct) => {
  return (
    <div className="item" style={{width:200,position:"relative"}}>
        <div className="thumb">
            <img width={'100%'}  src={thumb} alt={name} />
        </div>
        <h3>{name}</h3>
        <div>
            {
                promoPrice > 0 ? (
                    <>
                        <strong style={{color:'red'}}>{promoPrice}</strong>
                        <del>{price}</del>
                    </>
                )
                : (
                    <strong>{price}</strong>
                )
            }
        </div>
            {
                (promoPrice != price) ? (
                    <>
                       <div style={{position:"absolute",top:0,right:0,background:"orange",padding:"3px 5px",borderRadius:5}}>{(100-Math.round(promoPrice*100/price))} %</div>
                    </>
                ):("")
            }
    </div>
  )
}
export default SingleProduct