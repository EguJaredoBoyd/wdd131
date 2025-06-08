const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fs-1987", name: "Flying Skateboard" },
    { id: "ac-2000", name: "Arc Reactor" },
    { id: "gp-2020", name: "Giga Processor" },
    { id: "ms-2021", name: "Mini Speaker" }
  ];
  
  const productSelect = document.getElementById("productName");
  
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  