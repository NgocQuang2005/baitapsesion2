import Avtrt from "./Avtrt";
import AvatarComponent from "./Img";
import Namess from "./Name";
const divStyle = {
    border: '1px solid #000', // Đường viền 2px, màu đen
    padding: '10px', // Thêm padding để thấy rõ hơn
    width: '280px',
    height:'240px',
    marginBottom:'10px'
  };

const Bai8 = () => {
    return(
        <>
           <h2><b>Notable Scientits</b></h2>
           <div style={divStyle}>
             <Namess name="Maria Skalodowska-Curie"/>
             <AvatarComponent avatarID="szV5sdG"/>
             <ul style={{paddingLeft: 18}}>
                <Avtrt names="Profession" sar="physicist and chemist"/>
                <Avtrt names="Awards" acs="4" sar="(Nobel Prize in Physics, Nobel Prize in Chemistry , Davy Meda, Matteucci Medal)"/>
                <Avtrt names="Discovered" sar="polonium (element)"/>
             </ul>
           </div>
           <div style={divStyle}>
             <Namess name="Katsuko Saruhashi"/>
             <AvatarComponent avatarID="YfeOqp2"/>
             <ul style={{paddingLeft: 18}}>
                <Avtrt names="Profession" sar="geochemist"/>
                <Avtrt names="Awards" acs="2" sar="(Miyake Prize for geochemist , Tanaka Prize )"/>
                <Avtrt names="Discovered" sar="a method for measuring carbon dioxide in seawater"/>
             </ul>
           </div>
        </>
    )
}
export default Bai8