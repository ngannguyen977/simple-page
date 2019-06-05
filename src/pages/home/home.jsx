import React, { Component } from 'react';
import index from '../../pages/products';
import  './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home-page">

        <div className="container">
          <div className="row">
            <div className="col-md-6 short-intro">
              <h3>YÊU TẤT CẢ VẺ ĐẸP MỘC MẠC ĐẾN TỪ THIÊN NHIÊN</h3>
              <p>Chắc hẳn bạn đã từng biết đến hoặc đã từng được nghe tới NOTH Garden, một không gian tràn ngập cây giữa những ngóc ngách của Hà Nội. </p>
            </div>
            <div className="col-md-6"><img className="img-responsive" alt="" src="http://noth.garden/wp-content/uploads/2018/01/noth-garden-blog-trai-nghiem-khong-gian-cua-vuon-noth-5-1100x733.jpg" /></div>
          </div>
            {/* GALLERY */}
          <div className="container">
            <div className="gallery row">
              <div className="gallery-list col-md-4 col-xs-6">
                <div className="image-grid">
                  <img className="img-responsive" src="https://i.pinimg.com/564x/c3/8d/4f/c38d4f690b0ebdd3099c742deda4c853.jpg" alt="" />
                  <figcaption>
                    <p className="font20 font-roboto-regular font-color-dark">click to expand</p>
                  </figcaption>
                  <a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
                  <h2 className="item-name">Sen đá</h2>
                </div>
              </div>
              <div className="gallery-list col-md-4 col-xs-6">
                <div className="image-grid">
                  <img className="img-responsive" src="https://i.pinimg.com/564x/7b/f2/ea/7bf2ea74ccc88178da8e0eca255bf469.jpg" alt="" />
                  <figcaption>
                    <p className="font20 font-roboto-regular font-color-dark">click to expand</p>
                  </figcaption>
                  <a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
                  <h2 className="item-name">Cây phong thủy</h2>
                </div>
              </div>
              <div className="gallery-list col-md-4 col-xs-6">
                <div className="image-grid">
                  <img className="img-responsive" src="https://i.pinimg.com/564x/3b/07/d5/3b07d571f59e3f1b72d32d2463b2f660.jpg" alt="" />
                  <figcaption>
                    <p className="font20 font-roboto-regular font-color-dark">click to expand</p>
                  </figcaption>
                  <a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
                  <h2 className="item-name">Rau cải</h2>
                </div>
              </div>

              <div className="gallery-list col-md-6 col-xs-12">
                <div className="image-grid">
                  <img className="img-responsive" src="https://tnimage.taiwannews.com.tw/photos/shares/5a14280d531dd.jpg" alt="" />
                  <figcaption>
                    <p className="font20 font-roboto-regular font-color-dark">click to expand</p>
                  </figcaption>
                  <a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
                  <h2 className="item-name">Hoa hồng</h2>
                </div>
              </div>
              <div className="gallery-list col-md-6 col-xs-12">
                <div className="image-grid">
                  <img className="img-responsive" src="https://www.thermofisher.com/blog/wp-content/uploads/sites/2/2017/01/shutterstock_408614731.jpg" alt="" />
                  <figcaption>
                    <p className="font20 font-roboto-regular font-color-dark">click to expand</p>
                  </figcaption>
                  <a className="click-to-expand" href="#" data-toggle="modal" data-target="#modalGallery"></a>
                  <h2 className="item-name">Cây gia vị</h2>
                </div>
              </div>
            </div>
          </div>
          )
        </div>

        <products />

      </div>
    );
  }

}
export default Home;
