import Link from 'next/link'
function Input() {
  function redirection(){
    var val = document.querySelector("input").value;
    document.location.href="https://opggv2.netlify.app/test?id="+val; 
  }
    return (
    //   <Link
    //   href={{
    //     pathname: "/test",
    //     query: { id: "Carbo IRL" },
    //   }}
    // >
    //   <div>
    //     <input type="text"></input>
    //     <p>Bouton</p>
    //   </div>
    // </Link>
    <div>
      <input type="text"></input>
      {/* <a href="http://localhost:3000/test?id=Carbo+IRL">Bouton</a> */}
      <a onClick={redirection}>Bouton</a>
    </div>
    
     
    )
    
  }


  export default Input
