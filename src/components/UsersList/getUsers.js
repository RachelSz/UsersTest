
  const userDetails = (i)=>  {
    return {
      id: i,
      user: "User " + i
    }
  }
  
  function userGenerator(length) {
    return Array.from({
      length
    }, (_, i) => userDetails(i+1));
  }
  const users = userGenerator(100)

export default users;