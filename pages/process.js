// posts will be populated at build time by getStaticProps()
import champion from './champion.json';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
export default function Test({ posts,postsi }) {

  const router = useRouter();
  try{
    var mon_array = new Array();
    var full_data = new Array();
    var retour = "";
    var tableau = Object.values(champion.data)
    tableau.forEach(element => {
      for(var i = 0; i<3; i++){
        if(element.key == postsi[i].championId){
          mon_array["nom"] = element.name;
          mon_array["id"] = element.id;
          mon_array["point"] = postsi[i].championPoints;
          full_data.push(mon_array);
          mon_array = new Array();
        }
      }
    });   
    full_data.sort(function (a, b) {
      return b.point - a.point;
    });


    return (
      <div>
          <ul>
            <li>{posts.name}</li>
            <li>{posts.summonerLevel}</li>
        </ul>
        <ul>
          <li>Les meilleurs champions de {posts.name}</li>
          {full_data.forEach(element=>{
            retour = <li>{element.nom} avec {element.point} points</li>;
          })}
          {console.log(retour)}
          <li>{full_data[0].nom} avec {full_data[0].point} points</li>
          <img width="500px" src={"splash/"+full_data[0].id+"_0.jpg"}></img>
  
          <li>{full_data[1].nom} avec {full_data[1].point} points</li>
          <img width="500px" src={"splash/"+full_data[1].id+"_0.jpg"}></img>
  
          <li>{full_data[2].nom} avec {full_data[2].point} points</li>
          <img width="500px" src={"splash/"+full_data[2].id+"_0.jpg"}></img>
        
        </ul>
      </div>
    
    )
  } catch(ex){
    useEffect(()=>{
      router.push('/input?err=1&id='+posts.name);
    })
    return null;
  }
  
}
 
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getServerSideProps({ query }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const id = encodeURI(query.id)
    const res = await fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+id+'?api_key=RGAPI-a75feea4-972a-43cf-8248-38ea267527a7')
    const posts = await res.json()

    const resi = await fetch('https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+posts.id+'?api_key=RGAPI-a75feea4-972a-43cf-8248-38ea267527a7')
    const postsi = await resi.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
        postsi
      },
    }
  }

 
