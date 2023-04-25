async function onLoadData() {
    const data = await fetch('https://dummyjson.com/users');
    const records = await data.json();
    let tbody = document.getElementById('tbody');
    let tr = '';
    records.users.forEach(user => {
        tr += `<tr>
                        <td> ${user.firstName} </td>
                        <td> ${user.lastName} </td>
                        <td> ${user.email} </td>
                        <td> ${user.address.address} </td>
                    </tr>`;
    });

    tbody.innerHTML = tr;
}

function onSearch() {
    const value = document.getElementById('inputSearch').value;
    const table = document.getElementById('table');
    const tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        // firstName
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            if (td.innerHTML.toLowerCase().trim().indexOf(value.toLowerCase().trim()) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }

}