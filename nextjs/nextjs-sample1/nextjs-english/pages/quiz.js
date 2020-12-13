import Link from 'next/link'
import { useReducer } from 'react'
import HeaderLayout from './header'
import { Router, useRouter } from "next/router"

export default function QuizApp() {
    const router = useRouter()

    console.log(router.query)
    return (
        <div>

            <HeaderLayout></HeaderLayout>
            <h1>Quiz App</h1>
            <Link href = "/">
                <a>Back to Home</a>
            </Link>
        </div>
    )
}