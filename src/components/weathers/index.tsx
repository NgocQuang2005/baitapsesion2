import { IconName } from "react-icons/bs";
const Weatherss =[
    {id: 1, label: 'mon', time:'02:27 PM', icon:<BsCloudLightningRain />},
    {id: 2, label: 'tue', time:'06:27 PM'},
    {id: 3, label: 'wen', time:'07:27 PM'},
    {id: 4, label: 'Thu', time:'08:27 PM'},
    {id: 5, label: 'Fri', time:'12:27 PM'},
]
const Weathers = () =>{
   
       <div className="flex gap-x-4 my-5">
        {
            Weathers.map((Weathers))=>{
                return (  
                    <div className="flex flex-col items-center">
                        <Weathers.icon />
                        <strong>{Weathers.label}</strong>
                        <p>{Weathers.time}</p>
                    </div>
               
                        )
            }
        }
     </div>
           
}
export default Weathers