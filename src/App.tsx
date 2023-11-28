
import './App.css'
import ButtonV2 from './components/B1buttonV2'
import PolicyX from './components/Policy'
import { BsCart4 } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import SingleProduct from './components/b2react';
import { FaReply } from "react-icons/fa6";
import { BsCheck2Square } from "react-icons/bs";
import Indam4 from './components/B4React';
import { BsCaretRightFill } from "react-icons/bs";
import AttributesColor from './components/B5React';

import Bai7 from './components/Bai7React';
import Bai8 from './components/B8React';




function App() {
  // const [count, setCount] = useState(0)
  // rafce : tạo dòng code nhan
  return (
    <>
      <p style={{color:'blue'}}>Bài 1:</p>
      <PolicyX icon={<BsCheck2Square />} title= 'Bộ sản phẩm' desc='hộp, sách hưỡng dẫn, cáp, cây lấy sim'/>
      <PolicyX icon={<BsCheck2Square />} title='Bảo hành' desc='chính hãng 12 tháng'/>
      <PolicyX icon={<FaReply />} title='Đổi trả' desc='Hư gì đổi nấy 12 tháng'/> <hr />
      <p style={{color:'blue'}}>Bài 2:</p>
      <ButtonV2  name='Thêm vào giỏ hàng'  icon={<BsCart4 />}/>
      <ButtonV2 name='Gọi tư vẫn' className='btn_dark' icon={<BsFillTelephoneFill />}/> <hr />
      <p style={{color:'blue'}}>Bài 3:</p>
      <SingleProduct thumb='https://ecshopvietnam.com/ecshopmi/cdn/images/202204/thumb_img/cap-chuyen-doi-usb-c-sang-sd-thumb-G4316-1649993135646.png' promoPrice={1440000} name='Cáp chuyển đổi USB-C sang SD' price={1790000} />
      <hr />
      <p style={{color:'blue'}}>Bài 4:</p>
      <img src="https://img.lovepik.com/photo/50054/5973.jpg_wh860.jpg" alt="" width={350} height={220}/>
      <Indam4 name='Lighting Upgrades'/>
      <h5 style={{marginTop:12 , marginBottom:12 , color:'#7B7B7D'}}>23 Nov,2019 Posted by:admin ,2 Comments </h5>
      <p style={{marginTop:12 , marginBottom:12 , color:'#7B7B7D'}}>Electrical panel maintenance, therefore, should be <br />  part of your regular routine.</p>
      <p style={{marginTop:12 , marginBottom:12 }}>
        <b>Read more </b>
        <BsCaretRightFill />
      </p> 
      <hr />
      <p style={{color:'blue'}}>Bài 5:</p>
      <AttributesColor/>
      <hr />
      <p style={{color:'blue'}}>Bài 6:</p>
      <Bai7/>
      <hr />
      <p style={{color:'blue'}}>Bài 7:</p>
      <Bai8 />
    </>
    
  )
}
export default App
