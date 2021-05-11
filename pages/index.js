// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  console.log(posts);
  return (
    <ul>
      <li>{posts.name}</li>
      <li>{posts.summonerLevel}</li>
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Carbo%20IRL?api_key=RGAPI-ae6bbd8f-1fb6-4047-97fb-49ad70059891')
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
