import Header from "./components/Header";
import {Video, Thumb} from "./components/Video";
function App() {
  let obj = {
    title: 'Learn React',
    name:'Coder',
    views:"11K",
    years:"2 years ago",

  };
  return (
    <>
   <Header></Header>
   <Video  {...obj}></Video>
   <Thumb></Thumb>
   <Video title="Javascript" name="Harry" views="1M" years="5 days ago"></Video>
   <Thumb></Thumb>
    </>
    
  );
}

export default App;
