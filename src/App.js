import './App.css';
import React, {useState, useEffect} from 'react';
import UsersList  from './components/UsersList/UsersList';
import users from '../src/components/UsersList/getUsers';
import SearchBar from './components/SearchBar/SearchBar';
import {AppContainer, VerticalLine} from './App.style';

function App() {

  const[inputValue, setInputValue] = useState('');
  const [isFound, setIsFound] = useState(false);
  const [usersFound, setUsersFound] = useState([]);
  const[timesClicked, setTimesClicked] = useState(Array(100).fill(0));
  const [isFadingOutArr, setIsFadingOutArr] = useState(Array(100).fill(false));

  useEffect(() => {
    setTimeout(function(){ 
      filterSearchResult()
    }, 300);
  }, [inputValue])

  const filterSearchResult = () => {
    setUsersFound([]);
    users.forEach((user) => {
      if(user.user.toLowerCase().replace(/ /g, '').includes(inputValue.toLowerCase().replace(/ /g, ''))) {
        setIsFound(true)
        setUsersFound(usersFound =>[...usersFound, user])
      } 
    })
  };
  
  const handleClickUser = (id) => {
    const copy = [...timesClicked];
    for(let i = 0; i < usersFound.length; i++) {
      if(usersFound[i].id!== id) {
        copy[usersFound[i].id-1]++
      }
    };
    setTimesClicked(copy)
  };
  
  const fadeOut = (cb,id) => {
    let copy = [...isFadingOutArr];
    copy[id-1] = true
    setIsFadingOutArr(copy)
  };

  const removeItem = (id) => {
    let copy = [...usersFound];

    let i = copy.findIndex(object => {
      return object.id === id;
    });
    
    copy.splice(i,1)
    setUsersFound(copy)
  };

  return (
    <AppContainer>
      <SearchBar inputValue={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <VerticalLine className='vertical-line' style={{height:'120vh'}}></VerticalLine>
      <UsersList fadeOut={fadeOut} isFadingOutArr={isFadingOutArr}   removeItem={removeItem} timesClicked={timesClicked} handleClickUser={handleClickUser} users={users} usersFound={usersFound} isFound={isFound}/>
    </AppContainer>
  );
}

export default App;
