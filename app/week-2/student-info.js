import Link from 'next/link'

export default function StudentInfo () {
    return (
        <div>
            <p>Name: James Kyle</p>
            <span>
                Github: {" "} 
                <Link href="https://github.com/James-RD-Kyle/cprg306-assignments" 
                target="_blank" 
                className = "underline"
                >James-RD-Kyle/cprg306-assignments</Link>
                </span>
        </div>
    );
}