import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
// import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({searchParams}: { searchParams: Promise<{query?:string}>}) {
  const query = (await searchParams).query;

  const params = {search:query || null}

  // const posts = await client.fetch(STARTUP_QUERY);
  const {data:posts} = await sanityFetch({query:STARTUP_QUERY,params})
  console.log(JSON.stringify(posts,null,2))

  // const posts=[
  //   {
  //     _createdAt:new Date(),
  //     views:34,
  //     author:{_id:1,name:"Amit"},
  //     _id:1,
  //     title:"Pitch Your Startup",
  //     description:"Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions. ",
  //     image:"https://cdn.pixabay.com/photo/2024/06/21/06/09/ai-generated-8843638_1280.jpg",
  //     category:"Robots",
  //   },
  //   {
  //     _createdAt:new Date(),
  //     views:34,
  //     author:{_id:1,name:"Amit"},
  //     _id:1,
  //     title:"Pitch Your Startup",
  //     description:"Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions. ",
  //     image:"https://cdn.pixabay.com/photo/2024/06/21/06/09/ai-generated-8843638_1280.jpg",
  //     category:"Robots",
  //   },
  //   {
  //     _createdAt:new Date(),
  //     views:34,
  //     author:{_id:1,name:"Amit"},
  //     _id:1,
  //     title:"Pitch Your Startup",
  //     description:"Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions. ",
  //     image:"https://cdn.pixabay.com/photo/2024/06/21/06/09/ai-generated-8843638_1280.jpg",
  //     category:"Robots",
  //   },
  //   {
  //     _createdAt:new Date(),
  //     views:34,
  //     author:{_id:1,name:"Amit"},
  //     _id:1,
  //     title:"Pitch Your Startup",
  //     description:"Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions. ",
  //     image:"https://cdn.pixabay.com/photo/2024/06/21/06/09/ai-generated-8843638_1280.jpg",
  //     category:"Robots",
  //   },
  // ]

  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">Pitch Your StartUp,<br /> Connect With Entreprenuers.</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions. </p>
        <SearchForm query={query}/>

      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query?`Search results for "${query}"`:"All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length>0?(
            posts.map((post:StartupTypeCard,index:number)=>{
              return <StartupCard key={post?._id} post={post}/>
            })
          ):(
            <p>No startups found</p>
          )}

        </ul>

      </section>
      <SanityLive/>
    </div>
  );
}
