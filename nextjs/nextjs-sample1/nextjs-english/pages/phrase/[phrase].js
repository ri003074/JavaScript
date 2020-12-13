import { useRouter } from "next/router"

export default function phrase(){
    const router = useRouter();
    console.log(router)
    let data = router.query.phrase


    console.log(data)


    return <h1>{data}</h1>
}