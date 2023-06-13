import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import Input from './components/input.js';
import Recipe from './components/recipe.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import $ from "jquery";
const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;
function App() {
  const [value, setValue] = useState('');
  let [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(window.location.pathname);
  // $(document).ready(function(){
  //   let d=window.location.pathname;
  //   $('.li a[href^="'+d+'"]').addClass('active');
  // });
  const getrecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    recipes=[];
    setRecipes(data.hits);
  }

  const update = e => {
    setValue(e.target.value);
  }

  const Navsubmit = (e,v) => {
    e.preventDefault();
    setSearch(v);
  }
  
  const submit = e => {
    e.preventDefault();
    setSearch(value);
    setValue('');
  }
  let i=0,j=0;
  useEffect(() => {
    getrecipe();
  }, [search]);
  const myfunc=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(e) {scrollFunction(e)};

function scrollFunction(e) {
  var mybutton = document.getElementById("top");
  e.preventDefault();
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

var animateButton = function(e) {

  e.preventDefault();
  //reset animation
  // e.target.classList.remove('animate');
  
  // e.target.classList.add('animate');
  // setTimeout(function(){
  // e.target.classList.remove('animate');
  // },700);
};

const b=(e)=>{
// var bubblyButtons = document.getElementsByClassName("confetti-button");

// for (var x = 0; x < bubblyButtons.length; x++) {
//   bubblyButtons[x].addEventListener('click', animateButton, false);
// }
  animateButton(e);
}
  return (
    <div className="App">
      <Header fun={Navsubmit}/>
      <Input value={value} update={update} submit={submit} />
      <div className="recipe">
        <button id ="top" onClick={myfunc}>BACK TO TOP</button>
        {recipes.map(recipe => (
          <Recipe key={i++} u={j++} title={recipe.recipe.label} calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredients} image={recipe.recipe.image} time={recipe.recipe.totalTime} more={recipe.recipe.url} b={b}/>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default App;  