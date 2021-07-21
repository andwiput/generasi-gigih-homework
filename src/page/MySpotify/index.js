import React, { useState } from 'react';
import Home from './Home';
import Api from './Api';

const SpotifyPage = () => {

  const [view, set_view] = useState("search");
  const menu = [
    {
      name: "home",
      text: "Home",
      icon: "fa-home",
      page: <Home/>
    },
    {
      name: "search",
      text: "Search",
      icon: "fa-search",
      page: <Api/>
    }
  ]

  const Page = () => {
    const selected_page = menu.filter(item => item.name === view);
    return selected_page[0].page;
  }

  const Menu = () => {
    return (
      <div className="text-left">

        <div className="my-10">
          <img src="spotify-icon.png" className="w-32" alt="logo"/>
        </div>

        { menu.map((item) => {
          return (
            <div className="mb-2 ">
              <a className={`text-lg font-medium mb-5 ${view===item.name ? "text-black-100" : "text-black-600 hover:text-sptf"}`}
                href={`#${item.name}`} 
                onClick={() => {set_view(item.name)}} >
                  <i className={`fa m-2 ${item.icon}`}></i>
                  {item.text}</a>
            </div>
          );
        })}

      </div>
    )
  }

  return (

      <>
      <div className="w-full flex ">
        <div className="w-56 border border-black-600 ">
          <Menu/>
        </div>
        <div className="p-5 w-10/12">
          <Page/>
        </div>
      </div>

      </>
  );
}

export default SpotifyPage; 