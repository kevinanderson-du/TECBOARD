

export function Lista_Suspensa ({itens}){
    return(
        <select defaultValue="" name="lista">
            <option value="" disabled>
                Selecione um evento.
            </option>
            {itens.map(function (item){
                return <option key={item.id} value={item.id}>
                    {item.nome}
                </option>
            })}
        </select>
    )
}