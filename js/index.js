(async () => {
  const fetched = await fetch('https://suta-production-5093.up.railway.app:8080', {
    method: 'GET',
  });

  const data = await fetched.json();
  const { servers, users } = data;

  const serverDiv = document.getElementById('servers');
  const userDiv = document.getElementById('users');

  serverDiv.innerText = servers;
  userDiv.innerText = users;
})();
