import React from "react";
import {
  MyOrders as MyOrdersController,
  GoogleMaps,
  WrapperGoogleMaps,
} from "ordering-components";
import {
  MyOrdersContainer,
  MyOrdersTitle,
  ActiveOrders,
  Card,
  Map,
  Content,
  Logo,
  BusinessInformation,
  OpenOrder,
  Price,
  OrdersPast,
  IndividualOrderPast,
  OrderPastContent,
  Reorder,
} from "./styles";
import { Button } from "../../styles/Buttons";
export const MyOrdersUI = (props) => {
  const { activeOrders, previousOrders } = props;
  const GoogleMapsMap = WrapperGoogleMaps(GoogleMaps);
  return (
    <MyOrdersContainer>
      {activeOrders && (
        <>
          <MyOrdersTitle>
            <h3>Active Orders</h3>
          </MyOrdersTitle>
          <ActiveOrders>
            {activeOrders.map((order) => (
              <Card key={order.id}>
                <Map>
                  <GoogleMapsMap
                    apiKey="AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk"
                    location={order.business?.location}
                    mapControls={{
                      zoomControl: false,
                      streetViewControl: true,
                      fullscreenControl: true,
                      mapTypeId: "satellite", // 'roadmap', 'satellite', 'hybrid', 'terrain'
                      mapTypeControl: true,
                      mapTypeControlOptions: {
                        mapTypeIds: ["roadmap", "satellite"],
                      },
                    }}
                  />
                </Map>
                <Content>
                  <Logo>
                    <img src={order.business?.logo} />
                  </Logo>
                  <BusinessInformation>
                    <h5>{order.business.name}</h5>
                    <p>Order No. {order.id}</p>
                    <p>{order.created_at}</p>
                  </BusinessInformation>
                  <Price>
                    <h5>
                      ${order.products.reduce((acc, cur) => acc + cur.price, 0)}
                    </h5>
                    <p>{order.status === 0 ? "pending" : ""}</p>
                  </Price>
                </Content>
                <OpenOrder>
                  <Button color="primary">Open Order</Button>
                </OpenOrder>
              </Card>
            ))}
          </ActiveOrders>
        </>
      )}
      {previousOrders && (
        <>
          <MyOrdersTitle>
            <h3>My Orders Past</h3>
          </MyOrdersTitle>
          <OrdersPast>
            {previousOrders.map((order) => (
              <IndividualOrderPast key={order.id}>
                <OrderPastContent>
                  <Logo>
                    <img src={order.business?.logo} />
                  </Logo>
                  <BusinessInformation>
                    <h5>{order.business.name}</h5>
                    <p>{order.created_at}</p>
                    <p>View order</p>
                  </BusinessInformation>
                </OrderPastContent>
                <Reorder>
                  <p>{order.status === 1 || 11 ? "Complete" : ""}</p>
                  <Button color="primary">Reorder</Button>
                </Reorder>
              </IndividualOrderPast>
            ))}
          </OrdersPast>
        </>
      )}
    </MyOrdersContainer>
  );
};

export const MyOrders = (props) => {
  const MyOrdersProps = {
    ...props,
    UIComponent: MyOrdersUI,
  };

  return <MyOrdersController {...MyOrdersProps} />;
};
