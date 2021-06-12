import Connexion from './connexion'
import Input from './input'


// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  console.log(posts);
  
  return (
    <div>
      <Connexion/>
      <a href="./input">Rechercher votre profil</a>

    </div>
    


  )
}



// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Carbo%20IRL?api_key=RGAPI-3b710eae-5c5c-49a5-8163-6020a19175fa')
  const posts = await res.json()
  console.log(posts);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
