function ProductTable({ jsonData, handleChange }: any) {
  return (
    <div className="table-wrapper">
      <table className="productTable">
        <caption>Conklin Inks</caption>
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
          {jsonData.conklinInk.map((product: any) => (
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
              <td>0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
