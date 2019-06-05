import React, {Component} from 'react';
import Menu from  './../share-component/menu/menu';
import index from '../../pages/products';
import Footer from  './../share-component/footer/footer';

class Home extends Component {
  render(){
    return (
      <div className="home-page">
        <Menu />

        <div className="container">
            <div className="row">
                <div className="col-md-6 short-intro">
                    <h3>YÊU TẤT CẢ VẺ ĐẸP MỘC MẠC ĐẾN TỪ THIÊN NHIÊN</h3>
                    <p>Chắc hẳn bạn đã từng biết đến hoặc đã từng được nghe tới NOTH Garden, một không gian tràn ngập cây giữa những ngóc ngách của Hà Nội. </p>
                </div>
                <div className="col-md-6"><img className="card-img-top" src="http://noth.garden/wp-content/uploads/2018/01/noth-garden-blog-trai-nghiem-khong-gian-cua-vuon-noth-5-1100x733.jpg" /></div>
            </div>
        </div>

        <products />
        <Footer />
      </div>
    );
  }

}
export default Home;
