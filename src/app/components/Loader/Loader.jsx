import './Loader.css';

function Loader(){
  return (
    <div className="loader">
      <div className="plane">
        <img src="https://zupimages.net/up/19/34/4820.gif" className="plane-img"></img>
      </div>
      <div className="earth-wrapper">
        <div className="earth"></div>
      </div>  
    </div>
  );
}

export default Loader;