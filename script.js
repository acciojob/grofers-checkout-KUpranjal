 const getSum = () => {
            const prices = document.querySelectorAll(".price");
            let total = 0;

            prices.forEach(cell => {
                const value = parseFloat(cell.textContent.trim());
                if (!isNaN(value)) total += value;
            });

            const table = document.querySelector("table");

            // remove old total row if exists
            const oldRow = document.getElementById("ans");
            if (oldRow) oldRow.remove();

            // create new row with id="ans"
            const totalRow = document.createElement("tr");
            totalRow.id = "ans";

            const totalCell = document.createElement("td");
            totalCell.colSpan = 2;
            totalCell.textContent = total;  // only number

            totalRow.appendChild(totalCell);
            table.appendChild(totalRow);
        };

        getSumBtn.addEventListener("click", getSum);