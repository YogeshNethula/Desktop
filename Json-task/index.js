fetch('https://jsonplaceholder.typicode.com/todos')

  .then(response => response.json())

  .then(json => tableData(json));

var tbody=document.getElementById("tbody");

  function tableData(json){

    // console.log(json);

    for (const data of json) {

        // console.log(data.title);

        tbody.innerHTML+=`

          <tr>

            <td>${data.id}</td>

            <td>${data.userId}</td>

            <td>${data.title}</td>

            <td class="fw-bold ${ data.completed ? 'text-success':'text-danger'}">${data.completed}</td>

          </tr>

        `
    
    }
    

  }