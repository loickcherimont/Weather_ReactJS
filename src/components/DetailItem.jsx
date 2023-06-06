export function DetailItem({option, data}) {
    return <li className="w-2/6 text-center flex-1 px-2">
        <p className="text-slate-400 font-normal">{option}</p>
        {data ? <p className="text-sm font-normal">{data}</p> : null}
    </li>
}