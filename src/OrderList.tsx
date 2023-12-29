function OrderList({ orderList }: any) {
  function calculateTotal(orderList: any) {
    let total = 0;

    orderList.forEach((element: any) => {
      total +=
        parseFloat(element.exportPrice) * parseFloat(element.itemQuantity);
    });
    return total;
  }
  return (
    <div id="orderList">
      <h5>Order List</h5>
      <div className="orders">
        {orderList.map((item: any) => (
          <div className="itemInCart" key={item.itemNumber}>
            <div>
              {item.itemNumber} {item.exportPrice} Qt: {item.itemQuantity}
            </div>
            <div></div>
          </div>
        ))}
      </div>
      Total: {calculateTotal(orderList)}
    </div>
  );
}

export default OrderList;
