//1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
.then(respons => respons.json())
  .then(users => {
    for (const user of users) {
      let div = document.createElement('div');
      div.innerText=`${user.id} ${user.name}`;
      let button =document.createElement('button');
      let value = document.createElement('div');
      value.append(div,button);
      document.body.appendChild(value);
      button.innerText='click';
      button.onclick =()=>{
        window.location.href='lesson-3.html?data='+JSON.stringify(user);
      }
    }
  })


















