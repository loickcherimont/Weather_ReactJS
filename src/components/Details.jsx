import { DetailItem } from "./DetailItem";

export function Details({ error, description, city, country }) {

    return <section className="bg-white text-slate-700 flex flex-col grow rounded-b-3xl p-2">

        {/* Error related to wrong usage of FilterBar */}
        <div>
            <p className="text-red-500 errorMessage">{error}</p>
        </div>
        <div>
            <p className="font-bold p-1">Weather now</p>
        </div>

        {/* Main details about selected city */}
        <ul className="flex justify-around gap-3">
            <DetailItem parameter={"City"} data={city} />
            <DetailItem parameter={"Conditions"} data={description} />
            <DetailItem parameter={"Country"} data={country} />
        </ul>
    </section>
}

