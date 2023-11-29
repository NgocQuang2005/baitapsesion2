import Compose from "./Compose"
const divStyle = {
  display:'flex',
  justifyContent:'space-around'
};
const montStyle = {
  width:'23% ',
  
};
const B2Session3 = () => {
  return (
    
    <div style={{width:1280 , backgroundColor:'#A6FFFF'}}>
        <div style={{justifyContent:'space-between', display:'flex', alignItems:'center'}}>
            <h2> TIN MỚI </h2>
            <h5> Xem thêm</h5>
        </div>
        <div style={divStyle}>
          <div style={montStyle}>
              <Compose linh="https://didongviet.vn/dchannel/wp-content/uploads/2023/09/samsung-galaxy-a05-khi-nao-ra-mat-3-didongviet-1.jpg" 
              introduce="Ấn tượng đầu tiên samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Supper AMOLED 90Hz" price="140 lượt xem"/>
          </div>
          <div style={montStyle}> 
              <Compose linh="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/dien-thoai-samsung-dong-A-moi-nhat.png" 
              introduce="Google pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12" price="127 lượt xem"/>
          </div>
          <div style={montStyle}>
              <Compose linh="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/dien-thoai-samsung-gap-10.jpg" 
              introduce="Galaxy A52 4G lộ diện trên Google Play console xác nhận dùng chip Snapdragon 720 " price="55 lượt xem"/>
          </div>
          <div style={montStyle}>
              <Compose linh="https://genk.mediacdn.vn/2018/12/4/photo-1-1543885602089964243015.jpg" 
              introduce="Galaxy A82 5G chuẩn bị ra mắt với chip Plagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa " price="55 lượt xem"/>
          </div>
          
        </div>
    </div>
  )
}

export default B2Session3