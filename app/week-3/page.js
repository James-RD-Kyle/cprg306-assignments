import ItemList from './item-list';

export default function Page() {
    return (
        <main>
            <div className="grid place-items-center items-baseline-last flex-initial m-2">
                <h1 className="text-2xl font-bold">Shopping List</h1>
                <ItemList/>
            </div>
        </main>
    )
}