import Image from "next/image"
import allPokes from "@/app/data/alldata.json"
import allMoves from "@/app/data/allmoves.json"
import encounters from "@/app/data/encounters.json"
import GenSelect from "@/app/components/GenSelect"
import typeColors from "@/app/components/TypeColors.json"
import gamesGens from "@/app/data/gamesgens.json"
import "./Page.css"



export default function Page({ params }){
    const id = params.slug[0]
    const gen = params.slug.length > 1 ? params.slug[1] : "0"
    const moveLimit = [919, 100, 200, 300, 400, 500, 600, 700, 800, 919]
    const pokeData = allPokes[id]
    const species = pokeData.species
    let type1 = pokeData.type[0].toUpperCase()
    let type2 = ""
    if (pokeData.type[1]){
            type2 += pokeData.type[1].toUpperCase()
    }
    

    return(
        <main>
            <div className="version-select">
                <GenSelect pageType="page" idnum={id}/>
            </div>
            <div className="header">
                <Image alt={"Pokemon" + id} className="sprite" height="500" width="500" src={`/images/art/${id}.png`}/>
                <div className="name-data flex-col">
                    <h1 className="name-number"><span className="poke-number">{"#" + species}</span>  <span className="poke-name bold">{pokeData.name}</span></h1>
                    <div className="types"><span style={{color: typeColors[type1]}}>{type1}</span> <span style={{color: typeColors[type2]}}>{type2}</span></div>
                    <div className="abilities">
                        <table>
                            <tbody>
                                {pokeData.abilities.map(ability =>{
                                    return(
                                    <tr key={ability.name + "key"}>
                                        <td>{ability.name}</td>
                                        <td>Ability desc here{ability.is_hidden ? " (Hidden)" : ""}</td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="stats">
                        <table>
                            <thead>
                                <tr>
                                    <th>HP</th>
                                    <th>Attack</th>
                                    <th>Defense</th>
                                    <th>Sp Attack</th>
                                    <th>Sp Defense</th>
                                    <th>Speed</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{pokeData.stats[1]}</td>
                                    <td>{pokeData.stats[2]}</td>
                                    <td>{pokeData.stats[3]}</td>
                                    <td>{pokeData.stats[4]}</td>
                                    <td>{pokeData.stats[5]}</td>
                                    <td>{pokeData.stats[6]}</td>
                                    <td>{pokeData.stats[0]}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
           
            
            <div className="locations">
                <h1>Encounters</h1>
                <table className="loc-table">
                    <tbody>
                    {encounters[species].map((enc) => {
                        let verArr = []
                        for (let ver of enc.versions){
                            if (gen === "0" || gamesGens[gen].includes(ver)){
                                verArr.push(ver.replace("-", " "))
                            }
                        }

                        if (verArr.length < 1){
                            return 
                        }

                        return(
                            <tr key={"loc" + enc.area}>
                                <td>{enc.area}</td>
                                <td>{verArr.join(", ")}</td>
                            </tr>
                        )

                    })}
                </tbody>
                </table>
                {(encounters.length < 1) && <h2>No wild encounters or encounters not available for this version.</h2>}
            </div>
            <div className="moves">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Power</th>
                            <th>Accuracy</th>
                            <th>PP</th>
                            <th>Class</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokeData.moves.filter(item => item <= moveLimit[gen]).map((move, index) =>{
                            return(
                            <tr key={move + "key"}>
                                <td>{allMoves[move].name}</td>
                                <td><span style={{color: typeColors[allMoves[move].type.toUpperCase()]}}>{allMoves[move].type}</span></td>
                                <td>{allMoves[move].power ? allMoves[move].power : ""}</td>
                                <td>{allMoves[move].accuracy ? allMoves[move].accuracy : ""}</td>
                                <td>{allMoves[move].pp}</td>
                                <td>{allMoves[move].class}</td>
                                <td>{allMoves[move].desc ? allMoves[move].desc : ""}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </main>
   )
}