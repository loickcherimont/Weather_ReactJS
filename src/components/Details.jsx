import { DetailItem } from "./DetailItem";

export function Details({ error, description, city, country }) {
    return <footer className="bg-white text-slate-700 border flex flex-col grow rounded-b-3xl p-2">
        <section>
            <p className="text-red-500 errorMessage">{error}</p>
        </section>
        <section>
            <p className="font-bold p-1">Weather now</p>
        </section>

        <ul className="flex justify-around">
            <DetailItem option={"City"} data={city} />
            <DetailItem option={"Conditions"} data={description} />
            <DetailItem option={"Country"} data={country} />
        </ul>
    </footer>
}