const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices=document.querySelectorAll(".price")
	let total=0
	prices.forEach(cell=>{
		total+=Number(cell.textContent.trim())
	})
	const table=document.getElementById("savingsTable")
	const totalRow=document.createElement("tr")
	const totalCell=document.createElement("td")
	totalCell.colSpan=2
	totalCell.style.frontWeight="bold"
	totalCell.textContent="Total Price: " + total
	totalRow.appendChild(totalCell)
	table.appendChild(totalRow)
};

getSumBtn.addEventListener("click", getSum);

