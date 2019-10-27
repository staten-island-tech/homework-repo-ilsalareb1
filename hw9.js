/* async function go() {
    const p1 = fetch('https://api.github.com/users/wesbos').then(r => r.json())
    const p2 = fetch('https://api.github/users/stolinski').then(r => r.json())
    const res = await Promise.all([p1,p2]);
    console.log(res);
}
go(); */


async function getData(names){
    const promises = names.map(name => fetch(`https://api.github.com/users/${name}`).then(r => r.json()));
    const people = await Promise.all(promise);
    console.log(people);
}

getData(['wesbos', 'stolinski', 'darcyclarke']);