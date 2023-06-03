import Button from "@/components/ui/Button"
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth"
import { FC } from "react"

interface pageProp {

}


const page = async ({}) => {

  const session = await getServerSession(authOptions);

  return (
   <>Hello dashboard</>
  )
}

export default page
