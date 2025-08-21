   const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);

        const getSum = () => {
            // Get all price cells
            const priceCells = document.querySelectorAll(".prices");
            let total = 0;

            // Add up all numbers
            priceCells.forEach(cell => {
                const value = parseFloat(cell.textContent.trim());
                if (!isNaN(value)) total += value;
            });

            const table = document.querySelector("table");

            // Remove old total row if exists
            const oldRow = document.getElementById("ans");
            if (oldRow) oldRow.remove();

            // Create new row with id="ans"
            const totalRow = document.createElement("tr");
            totalRow.id = "ans";

            const totalCell = document.createElement("td");
            totalCell.colSpan = 2;
            totalCell.textContent = total;  // only number

            totalRow.appendChild(totalCell);
            table.appendChild(totalRow);
        };

        // Attach event
        getSumBtn.addEventListener("click", getSum);