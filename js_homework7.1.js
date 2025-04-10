var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName: "Brad",
        lastName: "Zaker",
        email: "b..z@gmail.com" 
      },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];
  
  const trustedEmails = arr
    .map(item => item.email)
    .filter(email => /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/.test(email));
  
  console.log(trustedEmails);
  