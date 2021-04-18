// posts will be populated at build time by getStaticProps()

export default function Test({ posts,postsi }) {
  // var posts = getServerSideProps();
  console.log(postsi);

  
    return (
      <div>
          <ul>
            <li>{posts.name}</li>
            <li>{posts.summonerLevel}</li>
        </ul>
        <ul>
          <li>Les meilleurs champions de {posts.name}</li>
          <li>{postsi[0].championId} avec {postsi[0].championPoints} points</li>
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
 
    const res = await fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+id+'?api_key=RGAPI-ae6bbd8f-1fb6-4047-97fb-49ad70059891')
    const posts = await res.json()

    const resi = await fetch('https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+posts.id+'?api_key=RGAPI-ae6bbd8f-1fb6-4047-97fb-49ad70059891')
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

 
