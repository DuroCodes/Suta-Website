(async () => {
  const { data } = await axios.get('http://api.suta.tk');
  const { servers, users } = data;

  const serversDOM = document.getElementById('servers');
  const usersDOM = document.getElementById('users');

  serversDOM.innerText = servers;
  usersDOM.innerText = users;
})();
