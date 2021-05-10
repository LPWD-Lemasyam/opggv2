// posts will be populated at build time by getStaticProps()
import champion from './champion.json';
const customData = require('./champion.json');
export default function Test({ posts,postsi }) {
  // var posts = getServerSideProps();
 var nomChampionUn ="";
 var imageChampionUn ="";

 var tableau = Object.values(champion.data)
tableau.forEach(element => {
  console.log(element);
  if(element.key == postsi[0].championId){
     nomChampionUn = element.name;
     imageChampionUn = element.id;
  }
});    
console.log(nomChampionUn);
return (
      <div>
          <ul>
            <li>{posts.name}</li>
            <li>{posts.summonerLevel}</li>
        </ul>
        <ul>
          <li>Les meilleurs champions de {posts.name}</li>
          <li>{nomChampionUn} avec {postsi[0].championPoints} points</li>
          <img width="500px" src={"splash/"+imageChampionUn+"_0.jpg"}></img>
         
        </ul>
      </div>
     
    )
  }
 
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getServerSideProps({ query }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const id = query.id
 
    const res = await fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+id+'?api_key=RGAPI-717cb490-1446-4459-b26d-1c958b6cd170')
    const posts = await res.json()

    const resi = await fetch('https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+posts.id+'?api_key=RGAPI-717cb490-1446-4459-b26d-1c958b6cd170')
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

 
