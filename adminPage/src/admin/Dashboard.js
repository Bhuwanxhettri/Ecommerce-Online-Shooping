import React from 'react'
import Chart from "chart.js/auto";
import { Line,Bar,Pie } from "react-chartjs-2";

const productSales = {
  labels: ["January", "February", "March", "April", "May", "June","July","August","Septmeber","October","November","December"],
  datasets: [
    {
      label: "# of Votes",
      data: [35, 25, 22, 20, 18, 15,402,123,123,132,432,132,423],
      backgroundColor: [
        "#007D9C",
        "#244D70",
        "#D123B3",
        "#F7E018",
        "#fff",
        "#FE452A",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
    
  ],
};

const productCategory = {
  labels: ["Dell","Accer","Hp","Samsung"],
  datasets: [
    {
      label: "# of Votes",
      data: [135, 25, 22, 20],
      backgroundColor: [
        "#007D9C",
        "#244D70",
        "#D123B3",
        "#F7E018",
        "#fff",
        "#FE452A",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className='mx-96'>
         

         <h1 className='text-2xl mb-3 mt-5'>2022 Product Sales</h1>
         <div className='grid-cols-2 grid  mb-5'>
              <Bar data={productSales}  />  
         </div>
         <h1 className='text-2xl mb-5'>Laptop Brand</h1>
         <div className='grid-cols-1 grid mb-5 '>
             <Pie data={productCategory} />
         </div>

         {/* <div className='grid-cols-1 grid mb-5 '>
              <Line data={data}/>
         </div> */}
         
    </div>
  )
}

export default Dashboard