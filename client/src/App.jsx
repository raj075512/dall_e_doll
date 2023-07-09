
import './App.css'

function App() {
 
  const surpriseOptions=[
    "a pritty girl with nose straight",
    "a donkey with 6 legs" ,
    "a smiling baby face with closed eyes",
  ]
  const handleImage=()=>{
       
  }

  return (
    <div className="mainContainer">
       <header>
          <h2> Get-Dall-Image</h2>
             <div className="appFeatures">
                <p>start search with <span className='surpriseMeButton'>surprise me</span></p>
               
             </div>
       </header>
           
         <section className="imputSection">
                  <input type="text" className='inputText'  />
                  <button>generate</button>
         </section>

         <section className="RenderingImg">
               <img src={handleImage} alt="image rendering" hidden/>
         </section>

    </div>
  )
}

export default App
