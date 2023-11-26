type Bai7tt ={
   
    linka:string;
   
}
function Bai7a ({ linka}: Bai7tt){
    return(
        <div >
           <img src={linka} alt="" width={200} height={100} style={{borderRadius:9}}/>
        </div>
    )
}
export default Bai7a