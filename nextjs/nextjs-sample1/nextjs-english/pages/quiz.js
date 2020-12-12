import Link from 'next/link'
import HeaderLayout from './header'

export default function QuizApp() {
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