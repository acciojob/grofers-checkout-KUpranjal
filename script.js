   const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);

        // Function to calculate sum
        const getSum = () => {
            const priceCells = document.querySelectorAll(".prices");
            let total = 0;

            priceCells.forEach(cell => {
                const value = parseFloat(cell.textContent.trim());
                if (!isNaN(value)) total += value;
            });

            const table = document.querySelector("table");

            // remove old total row if it exists
            const oldRow = document.getElementById("ans");
            if (oldRow) oldRow.remove();

            // create new total row
            const totalRow = document.createElement("tr");
            totalRow.id = "ans";

            const totalCell = document.createElement("td");
            totalCell.colSpan = 2;
            totalCell.textContent = total;  // only the number

            totalRow.appendChild(totalCell);
            table.appendChild(totalRow);
        };

        getSumBtn.addEventListener("click", getSum);