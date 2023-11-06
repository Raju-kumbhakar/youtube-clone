import {AiOutlineMenu} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
function Home() {
    return (
      <div>
      <div class="navbar">
          <div id="div1"> 
            <button id="nav1"><AiOutlineMenu/></button>
            <div id="nav2"></div>
          </div>
          <div id="div2"> 
            <div class='search'><input class="search-amazon" placeholder="   search"/>
            <button class='search-icon'><AiOutlineSearch/></button>
            </div>
            <button id="nav4"><BsFillMicFill/></button>
           </div> 
          <div id="div3"></div>
         </div>
         </div>
        )
        }