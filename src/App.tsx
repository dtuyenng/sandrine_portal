import "./App.css";
import { useState } from "react";
import ProductTable from "./components/ProductTable";
import OrderList from "./OrderList";
import jsonData from "./assets/sondrineData.json";

interface OrderItem {
  itemNumber: string;
  itemDesc: string;
  itemPrice: number;
  itemQuantity: number;
}

function App() {
  const [curPriceList] = useState(jsonData);
  const [curOrderList, setOrderList] = useState<OrderItem[]>([]);

  function handleChange(product: any, event: any) {
    const newQuantity = parseInt(event.target.value);
    console.log(product.itemNumber + " changed to " + newQuantity);

    // Check if the item already exists in the order list
    const existingItemIndex = curOrderList.findIndex(
      (item) => item.itemNumber === product.itemNumber
    );

    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity
      const updatedOrderList = [...curOrderList];
      updatedOrderList[existingItemIndex].itemQuantity = newQuantity;
      setOrderList(updatedOrderList);
    } else {
      // If the item doesn't exist, add it to the order list
      const newOrder = [
        ...curOrderList,
        {
          itemNumber: product.itemNumber,
          itemDesc: product.itemDesc,
          itemPrice: product.itemPrice,
          itemQuantity: newQuantity,
        },
      ];
      setOrderList(newOrder);
    }
  }

  return (
    <div>
      <div>Items: {curOrderList.length}</div>
      <ul id="categoryList">
        <li className="category">Conklin Pens</li>
        <li className="category">Monteverde Pens</li>
        <li className="category">CK Inks</li>
        <li className="category">MV Inks</li>
        <li className="category">PR Inks</li>
        <li className="category">365</li>
      </ul>
      <div id="mainWrapper">
        <ProductTable
          jsonData={curPriceList}
          handleChange={handleChange}
        ></ProductTable>
        <OrderList orderList={curOrderList}></OrderList>
      </div>
    </div>
  );
}

export default App;
