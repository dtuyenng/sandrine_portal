function OrderList({ orderList }: any) {
  return (
    <div id="orderList">
      <h3>Order List</h3>
      <div className="orders">
        {orderList.map((item: any) => (
          <div key={item.itemNumber}>
            {item.itemNumber} Qt: {item.itemQuantity}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderList;
