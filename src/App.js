import React, { Component } from 'react';
import { Slider, Slide, Caption, Card, Col, Row, CardTitle, Pagination, SideNav, SideNavItem, Button } from 'react-materialize';
class App extends Component {
  render() {
    return (
      <div>
        <SideNav
          trigger={<Button>...</Button>}
          options={{ closeOnClick: true }}
        >
          <SideNavItem userView
            user={{
              background:'https://placeimg.com/640/480/tech',
              image: '',
              name: 'Satriawan Darmawan',
              email: 'test@gmail.com'
            }}
          />
          <SideNavItem href="#!icon" icon="cloud">First Link With Icon</SideNavItem>
          <SideNavItem href="#!second">Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href="#!third">Third Link with Waves</SideNavItem>
        </SideNav>


        <Slider>
          <Slide
            image={<img src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" alt=""/>}
          >
            <Caption>
              <h3>Pantai</h3>
              <h5>Dapatkan Kesempatan Jalan-jalan ke Pantai Dengan Membeli Sebuah Product</h5>
            </Caption>
          </Slide>

          <Slide
            image={<img src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg" alt=""/>}
          >
          <Caption>
            <h3>Hong Kong</h3>
            <h5>Dapatkan Kesempatan Jalan-jalan ke Hong Kong Dengan Membeli Sebuah Product</h5>
          </Caption>
        </Slide>

        <Slide
          image={<img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72" alt=""/>}
        >
          <Caption>
            <h3>Paris</h3>
            <h5>Dapatkan Kesempatan Jalan-jalan ke Paris Dengan Membeli Sebuah Product</h5>
          </Caption>
        </Slide>
        </Slider>
        <h6>Hot List</h6>
        <Row>
          <Col m='3'>
            <Card
              className="small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg'>Audio</CardTitle>}
            >
            Audio Technica - Mulai dari Rp 910.000
            </Card>
          </Col>
          <Col m='3'>
            <Card
              className="small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg'>Handphone</CardTitle>}
            >
            Handphone Samsung - Mulai dari Rp 200.000
            </Card>
          </Col>
          <Col m='3'>
            <Card
              className="small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg'>Sequishy</CardTitle>}
            >
            Sequishy - Mulai dari Rp 5.500
            </Card>
          </Col>
          <Col m='3'>
            <Card
              className="small"
              header={<CardTitle image='https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg'>Koleksi The Avengers</CardTitle>}
            >
            Koleksi The Avengers - Mulai dari Rp 10.000
            </Card>
          </Col>
        </Row>
        <Pagination activePage={2} maxButtons={8} />

      </div>
    );
  }
}
export default App;
