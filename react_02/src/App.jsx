import 'react'
import './index.css'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import FileUpload from './components/FileUpload';



// const user = {
//   name: "Coder",
//   imageUrl: "https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg",
//   imageSize: 90,
// };

// export default function Aboutus(){
//   return(
//     <>
//     <h1>{user.name}</h1>
//     <img className="avatar" src={user.imageUrl} 
//     alt={'Photo of' + user.name}
//     style={{
//       width: user.imageSize,
//       height: user.imageSize
//     }} />

//     <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
//     <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
//     <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
//     <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
//     </>
//   );
// }
 
function App(){
  return(
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <FileUpload />
    </div>

    </>
  )
}
export default App;