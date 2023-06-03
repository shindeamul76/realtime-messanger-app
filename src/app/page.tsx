import { Redis } from "@upstash/redis"


export const redis = Redis.fromEnv()

export default async function Home() {


  return (
   <>
    <div className="text-red-500">Hello world</div>
   </>
  )
}
