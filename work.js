const products=[
    {
    name:"tv",
    category:"electronics",
    price: 30000,
    rating:5.5
    },
      {
    name:"laptop",
    category:"electronics",
    price: 60000,
    rating:6.2
    },
      {
    name:"mobile",
    category:"electronics",
    price: 20000,
    rating:4.8
    },
      {
    name:"books",
    category:"books",
    price: 500,
    rating:4.5
    },
      {
    name:"headphones",
    category:"electronics",
    price: 2500,
    rating:5.1
    },
];

const filter=products.filter(p=> p.category==="electronics" && p.rating>5
)


const avgrating=filter.reduce((sum,p)=>sum+p.rating,0) /filter.length;


console.log(filter);
console.log("Average rating:", avgrating);
