import "./App.css";
import { useState } from "react";
import ProductTable from "./components/ProductTable";
import OrderList from "./OrderList";
import jsonData from "./assets/sondrineData.json";

interface OrderItem {
  itemNumber: string;
  desc: string;
  exportPrice: number;
  itemQuantity: number;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("CK_inks");
  const [curOrderList, setOrderList] = useState<OrderItem[]>([]);

  const categories = [
    { id: "conklin_pens", name: "Conklin Pens" },
    { id: "monterverde_pens", name: "Monteverde Pens" },
    { id: "CK_inks", name: "CK Inks" },
    { id: "MV_inks", name: "MV Inks" },
    { id: "PR_inks", name: "PR Inks" },
    { id: "365", name: "365" },
  ];

  function handleChange(product: any, event: any) {
    /**************** Add Object to Order List **************/
    const newQuantity = parseInt(event.target.value);

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
          desc: product.desc,
          exportPrice: product.exportPrice,
          itemQuantity: newQuantity,
        },
      ];
      setOrderList(newOrder);
    }
  }

  function setCategory(category: string) {
    setSelectedCategory(category);
  }

  return (
    <div>
      <ul id="categoryList">
        {categories.map((category) => (
          <li
            key={category.id}
            className={
              selectedCategory === category.id
                ? "category on_select"
                : "category"
            }
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <div id="mainWrapper">
        <ProductTable
          jsonData={jsonData}
          handleChange={handleChange}
          curOrderList={curOrderList}
          productCategory={selectedCategory}
        ></ProductTable>
        <OrderList orderList={curOrderList}></OrderList>
      </div>
    </div>
  );
}

export default App;
