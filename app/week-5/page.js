import NewItem from './new-item';

export default function Page() {
    return (
        <main>
            <div className="grid place-items-center items-baseline-last flex-initial m-2">
            <h1 className='text-2xl font-bold'>Add New Item</h1>
            <NewItem/>
        </div>
        </main>
    )
}