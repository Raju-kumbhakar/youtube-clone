import {AiFillHome} from 'react-icons/ai'
import {IoIosMusicalNote} from 'react-icons/io'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineShopping} from 'react-icons/ai'
import {BsNewspaper} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {MdOutlineSportsSoccer} from 'react-icons/md'
import {MdOutlinePodcasts} from 'react-icons/md'
import {AiOutlineBulb} from 'react-icons/ai'
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
     <div id="container2">
        <div id="sidebar">
          <button class='logo-button'><AiFillHome/>Home</button>
          <button class='logo-button'><IoIosMusicalNote/>Music</button>
          <button class='logo-button'><MdOutlineSubscriptions/>Subcriptions</button><hr/>
          <button class='logo-button'><AiOutlineShopping/>Shoping</button>
          <button class='logo-button'><BsNewspaper/>News</button>
          <button class='logo-button'><SiYoutubegaming/>Gaming</button>
          <button class='logo-button'><MdOutlineSportsSoccer/>Sports</button>
          <button class='logo-button'><MdOutlinePodcasts/>Podcasts</button>
          <button class='logo-button'><AiOutlineBulb/>Learing</button>
         
        </div>
        <div id="main">
            <div class="item content1 con"></div>
            <div class="item content2 con"></div>
            <div class="item content3 con"></div>
            <div class="item discription">
              <div class="profile1"></div>
              <div class="dis1">
              <h5>10 hours of pure black screen in 4k! (read description)</h5>
              <p>CandRfun .486K views  5 months ago</p>
              </div>
            </div>
            <div class="item discription">
            <div class="profile2"></div>
              <div class="dis2">
              <h5>Variables in JavaScript | JavaScript Tutorial in Hindi #2</h5>
              <p>Triggered insaan .12M views  9 months ago</p>
              </div>
            </div>
            <div class="item discription">
            <div class="profile3"></div>
              <div class="dis3">
              <h5>Complete Git and GitHub Tutorial for Beginners..|Github.com</h5>
              <p>Codewithharry .486K views  5 months ago</p>
              </div>
            </div>
            <div class="item content4 con2"></div>
            <div class="item content5 con2"></div>
            <div class="item content6 con2"></div>
            <div class="item discription">
            <div class="profile4"></div>
              <div class="dis4">
              <h5>10 hours of pure black screen in 4k! (read description)</h5>
              <p>CandRfun .486K views  5 months ago</p>
              </div>
            </div>
            <div class="item discription">
            <div class="profile5"></div>
              <div class="dis5">
              <h5>10 hours of pure black screen in 4k! (read description)</h5>
              <p>CandRfun .486K views  5 months ago</p>
              </div>
            </div>
            <div class="item discription">
            <div class="profile6"></div>
              <div class="dis6">
              <h5>10 hours of pure black screen in 4k! (read description)</h5>
              <p>CandRfun .486K views  5 months ago</p>
              </div>
            </div>
        </div>
     </div>
      </div>
    )

}
export default Home;