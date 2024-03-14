const promise1 = () => {
    return new Promise((resolve) => {
        const randomTime = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            resolve({ name: 'Promise 1', time: randomTime / 1000 });
        }, randomTime);
    });
}

const promise2 = () => {
    return new Promise((resolve) => {
        const randomTime = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            resolve({ name: 'Promise 2', time: randomTime / 1000 });
        }, randomTime);
    });
}

const promise3 = () => {
    return new Promise((resolve) => {
        const randomTime = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
            resolve({ name: 'Promise 3', time: randomTime / 1000 });
        }, randomTime);
    });
}

const promises = [promise1(), promise2(), promise3()];

Promise.all(promises)
    .then((results) => {
        const output = document.getElementById('output');
        const loadingRow = document.getElementById('loading');
        output.removeChild(loadingRow);
        let totalTime = 0;
        results.forEach((result) => {
            const { name, time } = result;
            totalTime += time;
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const timeCell = document.createElement('td');
            nameCell.setAttribute('colspan', '2');
            timeCell.style.display = 'none'; // Hide the second column
            nameCell.textContent = `${name}: ${time.toFixed(3)}s`;
            row.appendChild(nameCell);
            row.appendChild(timeCell);
            output.appendChild(row);
        });
        const totalRow = document.createElement('tr');
        const totalCell = document.createElement('td');
        totalCell.setAttribute('colspan', '2');
        totalCell.textContent = `Total: ${totalTime.toFixed(3)}s`;
        totalRow.appendChild(totalCell);
        output.appendChild(totalRow);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
