export function DetailItem({parameter, data}) {
    return <li className="w-2/6 text-center flex-1 px-2">
        <p className="text-slate-400 font-normal">{parameter}</p>
        {data ? <p className="text-sm font-normal">{data}</p> : null}
    </li>
}