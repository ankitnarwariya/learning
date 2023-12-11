fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {

        
        let tbody = document.querySelector('#tbody')
        
        for (let e in data) {

            let row = document.createElement('tr');

            row.innerHTML = `<tr>
            <td>${data[e].id}</td>
            <td>${data[e].name}</td>
            <td>${data[e].username}</td>
            <td>${data[e].email}</td>
          </tr>`;

          tbody.appendChild(row);

            console.log(data[e]);                
            }
      })
      .catch(error => console.log(error));