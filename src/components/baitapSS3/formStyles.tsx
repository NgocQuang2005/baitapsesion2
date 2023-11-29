import ContentForm from './contentForm';

function FormStyle() {
  return (
    <div style={{display:'flex', justifyContent:"space-evenly" , width:1200}}>
      <div style={{width:'30%'}}>
        <h3 > TOP RATECD PRODUCTS</h3>
        <ContentForm productName="Forto Extended Camera" linksp="https://lavender.edu.vn/wp-content/uploads/2019/10/may-anh-cho-nguoi-moi-bat-dau-4.jpg" price='49.00' rating={5}/>
        <ContentForm productName="Blue BackPlack" linksp="https://dongduongsport.com/wp-content/uploads/2022/12/tui-deo-cheo-the-thao-in-logo-cau-lac-bo-1-ngan-dongduongsportcom-0-300x300.jpg" price='59.00' rating={4}/>
        <ContentForm productName="Casual Black Shoes" linksp="https://giaydanamcongso.vn/data/Product/1638675535_giay-tay-nam-da-bo-dep-m162.jpg" price='32.00' rating={5}/>
      </div>
      <div style={{width:'30%'}}>
        <h3> BEST SELLING PRODUCTS</h3>
        <ContentForm productName="Battery Charger" linksp="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiwEeYF1Kidps4dOiTLGG-OLRd2EqqCwt5g&usqp=CAU" price='41.00' rating={3}/>
        <ContentForm productName="Computer Mouse" linksp="https://cf.shopee.vn/file/6401afc24db00eff064e17264f4083a1" price='57.00' rating={5}/>
        <ContentForm productName="Casual Note Bag" linksp="https://cdn.vuanhwatch.com/media/products/tui-xach/37351/tui-xach-gucci-ophidia-handbag-small-mau-nau-6374423666773-16112022085150.jpg" price='37.00' rating={3}/>
      </div>
      <div style={{width:'30%'}}>
        <h3> TOP RATECD PRODUCTS</h3>
        <ContentForm productName="Ultimate 3D bluetooth ..." linksp="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSkvISd1KL1O6bG6CTGbujGn_h-WmUOoF-RG7U1fGZAdT9lYvbU-vXFsYDQFIeWMHWbI&usqp=CAU" price='49.00' rating={5}/>
        <ContentForm productName="Brown-White Men Casu ..." linksp="https://salt.tikicdn.com/cache/w400/ts/product/a5/2a/ab/777ccf634048780060aeeaf10b9dad9b.jpg" price='25.00' rating={2}/>
        <ContentForm productName="Beautiful men's glasses" linksp="https://product.hstatic.net/1000269337/product/side-326_4db4234d73704c42b1d73a86adaabd83_master.jpg" price='35.00' rating={4}/>
      </div>
    </div>
  );
}

export default FormStyle;