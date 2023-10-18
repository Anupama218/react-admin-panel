import './list.css';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  
         const productList = [
        {
            Product : "AI",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : 'https://cdn.ahzassociates.co.uk/wp-content/uploads/2021/07/23155029/cloud-computing-msc.jpg?_ga=2.22424703.532883980.1697611311-1165353421.1697611311&_gl=1*rcmrgg*_ga*MTE2NTM1MzQyMS4xNjk3NjExMzEx*_ga_S9FHNFE9ZM*MTY5NzYxMTMxMS4xLjEuMTY5NzYxMTMxMS42MC4wLjA.',
            stock: "23",
            price:"$456",
            sales:"12",
        },
        {
            Product : "Blockchain",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : 'https://cdn.ahzassociates.co.uk/wp-content/uploads/2021/07/23155029/cloud-computing-msc.jpg?_ga=2.22424703.532883980.1697611311-1165353421.1697611311&_gl=1*rcmrgg*_ga*MTE2NTM1MzQyMS4xNjk3NjExMzEx*_ga_S9FHNFE9ZM*MTY5NzYxMTMxMS4xLjEuMTY5NzYxMTMxMS42MC4wLjA.',
            stock: "23",
            price:"$456",
            sales:"12",
        },
        {
            Product : "Cloud Computing",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : 'https://cdn.ahzassociates.co.uk/wp-content/uploads/2021/07/23155029/cloud-computing-msc.jpg?_ga=2.22424703.532883980.1697611311-1165353421.1697611311&_gl=1*rcmrgg*_ga*MTE2NTM1MzQyMS4xNjk3NjExMzEx*_ga_S9FHNFE9ZM*MTY5NzYxMTMxMS4xLjEuMTY5NzYxMTMxMS42MC4wLjA.',
            stock: "23",
            price:"$456",
            sales:"12",
        },
        {
            Product : "Machine Learning",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            img : 'https://cdn.ahzassociates.co.uk/wp-content/uploads/2021/07/23155029/cloud-computing-msc.jpg?_ga=2.22424703.532883980.1697611311-1165353421.1697611311&_gl=1*rcmrgg*_ga*MTE2NTM1MzQyMS4xNjk3NjExMzEx*_ga_S9FHNFE9ZM*MTY5NzYxMTMxMS4xLjEuMTY5NzYxMTMxMS42MC4wLjA.',
            stock: "23",
            price:"$456",
            sales:"12",
        }
    ]
     
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Product Name</TableCell>
            <TableCell className="tableCell">Stock</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList.map((product, index) => (
            <TableRow key={product.index}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={product.img} alt="" className="image" />
                  <div className='p-desc'>
                    <span className='prod'>{product.Product}</span>
                    <span className='desc'>{product.desc}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="tableCell">{product.stock}</TableCell>
              <TableCell className="tableCell">{product.price}</TableCell>
              <TableCell className="tableCell">{product.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;