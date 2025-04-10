var arr = [
    {
      userName: "Test",
      lastName: "Test",
      email: "test.test@gmail.com"
    },
    {
      userName: "Dmitro",
      lastName: "Porohov",
      email: "dmitro.porohov@yahoo.com"
    },
    {
      userName: "Andrii",
      lastName: "",
      email: "andrii@mail.ru"
    },
    {
      userName: "Bad",
      lastName: "Guy",
      email: "bad_guy@outlook.com"
    },
    {
      userName: "Invalid",
      lastName: "Dot",
      email: "a..b@gmail.com"
    }
  ];
  
  const trustedEmails = arr
    .map(item => item.email)
    .filter(email => /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/.test(email));
  
  console.log(trustedEmails);
  