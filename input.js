import Link from 'next/link'
function Input({query}) {
  function redirection(){
    var val = document.querySelector("input").value;
    document.location.href="http://localhost:3000/process?id="+val;  
  }
  function handleAnswerChange(event){
    if(event.charCode == 13){
      redirection();
    }
  }
  if(query["err"] == 1 && query["id"]!=""){
    return (
      <div>
        <input onKeyPress={handleAnswerChange} type="text"></input>
        <a onClick={redirection}>Bouton</a>
        <h2>Le pseudo {query["id"]} n'est pas correct</h2>
      </div>
      )
    }else{
      return (
        <div>
          <input type="text"></input>
          <a onClick={redirection}>Bouton</a>
        </div>
        )
    }
  }
 
  export async function getServerSideProps({ query }) {
    console.log({query});
    return {
      props: {
        query,
      },
    }
  }

  export default Input