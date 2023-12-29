import { useState } from "react";

function ProductTable({
  jsonData,
  handleChange,
  curOrderList,
  productCategory,
}: any) {
  //const [productCategory, setProductCategory] = useState("MVInk"); // Initial category state
  console.log("product cat: " + productCategory);
  const productsToRender = jsonData[productCategory];

  function calculateRowTotal(product: any) {
    // Find the corresponding item in the orderList

    const orderItem = curOrderList.find(
      (item: any) => item.itemNumber === product.itemNumber
    );

    if (orderItem) {
      // Calculate total based on quantity and suggested price
      const total = orderItem.itemQuantity * orderItem.exportPrice;
      return total.toFixed(2); // Format the total as needed
    }

    return 0; // If not found in orderList, display 0
  }

  console.log(productsToRender);

  return (
    <div className="table-wrapper">
      <table className="productTable">
        <thead>
          <tr>
            <th>Item #</th>
            <th>UPC Code</th>
            <th>Description</th>
            <th>Suggested Retail</th>
            <th>Export Pricing</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productsToRender.map((product: any) => (
            <tr key={product.itemNumber}>
              <td>{product.itemNumber}</td>
              <td>{product.upc}</td>
              <td>{product.desc}</td>
              <td>{product.suggestedPrice}</td>
              <td>{product.exportPrice}</td>
              <td>
                <input
                  type="number"
                  defaultValue={0}
                  min="0"
                  onChange={(event) => handleChange(product, event)}
                />
              </td>
              <td className="productTotal">{calculateRowTotal(product)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
