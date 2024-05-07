'use client'
import typeColors from './TypeColors.json'
import Link from 'next/link'
import Image from 'next/image'
import "./DexTable.css"
export default function DexTable(props){
    
    const {allPokes, generation, generationNum, totalStats, searchText, statsLessThan, ascending, setAscending, sortOn, setSortOn} = props
    let tableArray = []
    for (let pkid in allPokes){
        if (pkid > 1024){
            break
        }
        const pokemon = allPokes[pkid]
        let valid = true
        for(let gen of generation){
            if (!(pokemon.pokedex.hasOwnProperty(gen))){
                valid = false
                continue
            }
        }
        if (statsLessThan && (pokemon.stats[0] > totalStats)){
            valid = false
            continue
        }
        if ((!statsLessThan) && (pokemon.stats[0] < totalStats)){
            valid = false
            continue
        }
        if (!(pokemon.name.toLowerCase().includes(searchText.toLowerCase()))){
            
            valid = false
            continue
        }
        if (valid){
            tableArray.push(pokemon.id)
        }
        
    }

    function handleSort(e){
        let prevSortOn = sortOn
        if (e.target.id === "num-header"){
            setSortOn("species")
        }
        if (e.target.id === "name-header"){
            setSortOn("name")
        }
        if (e.target.id === "hp-header"){
            setSortOn("hp")
        }
        if (e.target.id === "atk-header"){
            setSortOn("atk")
        }
        if (e.target.id === "def-header"){
            setSortOn("def")
        }
        if (e.target.id === "satk-header"){
            setSortOn("satk")
        }
        if (e.target.id === "sdef-header"){
            setSortOn("sdef")
        }
        if (e.target.id === "spd-header"){
            setSortOn("spd")
        }
        if (e.target.id === "total-header"){
            setSortOn("total")
        }
        if (sortOn === prevSortOn){
            setAscending(!ascending)
        }
    }
 
    function sortData(){
        if (sortOn === "species"){
            tableArray.sort((a , b) => {
                return (allPokes[a].species >= allPokes[b].species) ? 1 : -1 
            })
        }
        if (sortOn === "name"){
            tableArray.sort((a , b) => {
                return (allPokes[a].name >= allPokes[b].name) ? 1 : -1 
            })
        }
        if (sortOn === "hp"){
            tableArray.sort((a , b) => {
                return (allPokes[a].stats[1] >= allPokes[b].stats[1]) ? 1 : -1 
            })
        }
        if (sortOn === "atk"){
            tableArray.sort((a , b) => {
                return (allPokes[a].stats[2] >= allPokes[b].stats[2]) ? 1 : -1 
            })
        }
        if (sortOn === "def"){
            tableArray.sort((a , b) => {
                return (allPokes[a].stats[3] >= allPokes[b].stats[3]) ? 1 : -1 
            })
        }
        if (sortOn === "satk"){
            tableArray.sort((a , b) => {
                return (allPokes[a].stats[4] >= allPokes[b].stats[4]) ? 1 : -1 
            })
        }
        if (sortOn === "sdef"){
            tableArray.sort((a , b) => {
                return (allPokes[a].stats[5] >= allPokes[b].stats[5]) ? 1 : -1 
            })
        }
        if (sortOn === "spd"){
            tableArray.sort((a , b) => {
                return (allPokes[a].stats[6] >= allPokes[b].stats[6]) ? 1 : -1 
            })
        }
        if (sortOn === "total"){
            tableArray.sort((a , b) => {
                return (allPokes[a].stats[0] >= allPokes[b].stats[0]) ? 1 : -1 
            })
        }
        if (!ascending){
            tableArray.reverse()
        }
        
    }

    sortData()
    let tableElements = tableArray.map((id) => {
        let type1 = allPokes[id].type[0].toUpperCase()
        let type2 = ""
        if (allPokes[id].type[1]){
            type2 += allPokes[id].type[1].toUpperCase()
        }
        return(
        <tr key={"data-"+ id} className="table-row">
            
            <td className="table-data img-col"><Link href={`/pokemon/${id}/${generationNum}`}><Image src={`/images/sprites/${id}.png`} width="50" height="50" alt={allPokes[id].name}></Image></Link></td>
            <td className="table-data id-col"><Link href={`/pokemon/${id}/${generationNum}`}>{allPokes[id].species}</Link></td>
            <td className="table-data name-col"><Link href={`/pokemon/${id}/${generationNum}`}>{allPokes[id].name}</Link></td>
            <td className="table-data type-col"><span style={{color: typeColors[type1]}}>{type1}</span> <span style={{color: typeColors[type2]}}>{type2}</span></td>
            <td className="table-data hp-col">{allPokes[id].stats[1]}</td>
            <td className="table-data atk-col">{allPokes[id].stats[2]}</td>
            <td className="table-data def-col">{allPokes[id].stats[3]}</td>
            <td className="table-data satk-col">{allPokes[id].stats[4]}</td>
            <td className="table-data sdef-col">{allPokes[id].stats[5]}</td>
            <td className="table-data spd-col">{allPokes[id].stats[6]}</td>
            <td className="table-data total-col">{allPokes[id].stats[0]}</td>
        </tr>
        )
    })

    return(
        <div className="main-table-div">
            <table className="main-table">
                <thead>
                    <tr>
                        <th><button id="img-header" className="table-header-button img-col"></button></th>
                        <th><button id="num-header" className="table-header-button id-col" onClick={handleSort}>Number</button></th>
                        <th><button id="name-header" className="table-header-button name-col" onClick={handleSort}>Name</button></th>
                        <th><button id="type-header" className="table-header-button type-col">Type</button></th>
                        <th><button id="hp-header" className="table-header-button hp-col" onClick={handleSort}>HP</button></th>
                        <th><button id="atk-header" className="table-header-button atk-col" onClick={handleSort}>Attack</button></th>
                        <th><button id="def-header" className="table-header-button def-col" onClick={handleSort}>Defense</button></th>
                        <th><button id="satk-header" className="table-header-button satk-col" onClick={handleSort}>Sp Attack</button></th>
                        <th><button id="sdef-header" className="table-header-button sdef-col" onClick={handleSort}>Sp Defense</button></th>
                        <th><button id="spd-header" className="table-header-button spd-col" onClick={handleSort}>Speed</button></th>
                        <th><button id="total-header" className="table-header-button total-col" onClick={handleSort}>Total</button></th>
                    </tr>
                </thead>
                <tbody id="table-body" className="table-body">
                    {tableElements}
                </tbody>
            </table>
        </div>
    )
}