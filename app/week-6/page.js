import ItemList from './item-list';

export default function Page() {
    return (
        <main>
            <div className="grid place-items-center items-baseline-last flex-initial m-2">
                <h1 className="text-4xl font-bold">Shopping List</h1>
                <ul className="text-center w-full max-w-2xl">
                    <ItemList/>
                </ul>
            </div>
        </main>
    )
}
