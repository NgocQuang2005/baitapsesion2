import Bai7a from "./Bai7a"
import Bai7b from "./Bai7b"
import { FaRegHeart } from "react-icons/fa";

const Bai7 = () => {
  return (
<div >
    <h2><b>5 Videos</b></h2>
    {/* 1 */}
    <div style={{width:610, display:'flex' , alignItems:'center'}}> 
        <div style={{width:210}}>
            <Bai7a linka="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxn8mRS5UlBTJ6rIMZdGz4ov0qRJdTuS4Bw&usqp=CAU" />
        </div>
        <div style={{justifyContent:'space-between', display:'flex', width:400}}>
            <div>
                <Bai7b name="React: The Documentary" dex="The Origin Story of React"/>
            </div>
            <div style={{}}>
                <FaRegHeart />
            </div>
        </div>
    </div>
    {/* 2 */}
    <div style={{width:610, display:'flex' , alignItems:'center'}}> 
        <div style={{width:210}}>
            <Bai7a linka="https://statics.cdn.200lab.io/2021/12/ReactJS-vs-React-Native.jpg" />
        </div>
        <div style={{justifyContent:'space-between', display:'flex', width:400}}>
            <div>
                <Bai7b name="Rethinking Best Practices" dex="Pete Hunt (2013)"/>
            </div>
            <div style={{}}>
                <FaRegHeart />
            </div>
        </div>
    </div>
    {/* 3 */}
    <div style={{width:610, display:'flex' , alignItems:'center'}}> 
        <div style={{width:210}}>
            <Bai7a linka="https://www.htmlpanda.com/blog/wp-content/uploads/2022/05/A-Guide-on-ReactJS-Web-Development-1.png" />
        </div>
        <div style={{justifyContent:'space-between', display:'flex', width:400}}>
            <div>
                <Bai7b name="Introducing React Native" dex="Tom Occhino (2015)"/>
            </div>
            <div style={{}}>
                <FaRegHeart />
            </div>
        </div>
    </div>
    {/* 4 */}
    <div style={{width:610, display:'flex' , alignItems:'center'}}> 
        <div style={{width:210}}>
            <Bai7a linka="https://www.weblineindia.com/wp-content/uploads/2023/04/ReactJS-Development-Services-for-Your-Business.jpg" />
        </div>
        <div style={{justifyContent:'space-between', display:'flex', width:400}}>
            <div>
                <Bai7b name="Introducing React Hooks" dex="Sofie Alpert and Dan Abramov (2018)"/>
            </div>
            <div style={{}}>
                <FaRegHeart />
            </div>
        </div>
    </div>
    
</div>

  )
}

export default Bai7