import { BsStarFill, BsStar } from "react-icons/bs";
type frontType = {
    linksp:string;
    productName:string;
    price:string;
    rating:number;
};

// columnGap: dấu cách của icon

// const confiStyles ={
//     marginTop:'10',
//     marginBottom:'10'
// };
// const gayrStyles ={
//     marginTop:'10',
//     marginBottom:'10',
//     display:'flex'
// };
function ContentForm ({linksp, productName, price, rating}: frontType) {
  return (
        <div style={{display:'flex', marginBottom:15}}>
            <div style={{width:130 }}>
                <img src={linksp} alt="" width={120} height={110}/>
            </div>
            <div >
                <p style={{marginTop:10, marginBottom:10}}>{productName}</p>
                <div style={{marginTop:10, marginBottom:10 , display:'flex', columnGap:2}}> 
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            style={{ color: star <= rating ? 'gold' : 'gray' }}
                        >
                            {star <= rating ? <BsStarFill /> : <BsStar />}
                        </span>
                    ))}
                </div>
                <p style={{marginTop:10, marginBottom:10}}>${price}</p>
            </div>
        </div>
  )
}

export default ContentForm;
