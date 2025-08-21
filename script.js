const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // grab both possible class names
  const priceCells = document.querySelectorAll(".prices, .price");
  let total = 0;

  priceCells.forEach(td => {
    const n = parseFloat(td.textContent.trim());
    if (!isNaN(n)) total += n;
  });

  const table = document.querySelector("table");

  // remove an existing total row if present (keeps DOM clean for tests)
  const oldTotal = table.querySelector("tr[data-total]");
  if (oldTotal) oldTotal.remove();

  // create a single-cell row with just the numeric total
  const tr = document.createElement("tr");
  tr.setAttribute("data-total", "true");

  const td = document.createElement("td");
  td.colSpan = 2;
  td.textContent = total; // <-- number only (important for tests)

  tr.appendChild(td);
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
