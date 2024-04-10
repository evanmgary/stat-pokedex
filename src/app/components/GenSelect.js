"use client"
import { useRouter } from "next/navigation"
import "./Controls.css"
export default function GenSelect(props){

    const router = useRouter()

    const handleGen = (event) =>{
        if (props.pageType == "page"){
            router.push(`/pokemon/${props.idnum}/${event.target.name.substring(3, 4)}`)
        }
        else if (props.pageType == "table"){
            const buttonPressed = event.target.id
            let genArray = []
            switch (buttonPressed) {
                case "button-nat":
                    genArray.push("national")
                    props.setGenerationNum(0)
                    break
                case "button-gsc":
                    genArray.push("original-johto")
                    props.setGenerationNum(2)
                    break
                case "button-rse":
                    genArray.push("hoenn")
                    props.setGenerationNum(3)
                    break
                case "button-dpp":
                    genArray.push("original-sinnoh")
                    props.setGenerationNum(4)
                    break
                case "button-bw":
                    genArray.push("original-unova")
                    props.setGenerationNum(5)
                    break
                case "button-b2w2":
                    genArray.push("updated-unova")
                    props.setGenerationNum(5)
                    break
                case "button-xy":
                    genArray.push("kalos-mountain")
                    genArray.push("kalos-central")
                    genArray.push("kalos-coastal")
                    props.setGenerationNum(6)
                    break
                case "button-sm":
                    genArray.push("original-alola")
                    props.setGenerationNum(7)
                    break
                case "button-usum":
                    genArray.push("updated-alola")
                    props.setGenerationNum(7)
                    break
                case "button-oras":
                    genArray.push("updated-hoenn")
                    props.setGenerationNum(7)
                    break
                case "button-swsh":
                    genArray.push("galar")
                    props.setGenerationNum(8)
                    if (props.dlc){
                        genArray.push("isle-of-armor")
                        genArray.push("crown-tundra")
                    }
                    break
                case "button-sv":
                    genArray.push("paldea")
                    props.setGenerationNum(9)
                    if (props.dlc){
                        genArray.push("kitakami")
                        genArray.push("blueberry")
                    }
                    break
                
                default:
                    console.log("error")
            }
            props.setGeneration(genArray)
        }
    }

    return(
        <div id="generation-panel" className="panel">
                <button name="gen0" id="button-nat" className="gen-button" onClick={handleGen} style={{backgroundColor: "#0c2bfe"}}>All Pokemon</button>
                <button name="gen2" id="button-gsc" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(189,183,0,1) 0%, rgba(148,148,148,1) 100%)"}}>Gold/Silver</button>
                <button name="gen3" id="button-rse" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,14,255,1) 100%)"}}>Ruby/Sapphire</button>
                <button name="gen7c" id="button-oras" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(0,14,255,1) 100%)"}}>O Ruby/A Sapphire</button>
                <button name="gen4" id="button-dpp" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(196,252,249,1) 0%, rgba(219,124,252,1) 100%)"}}>Diamond/Pearl</button>
                <button name="gen5a" id="button-bw" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(115,115,115,1) 100%)"}}>Black/White</button>
                <button name="gen5b" id="button-bw2" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(115,115,115,1) 100%)"}}>Black 2/White 2</button>
                <button name="gen6" id="button-xy" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(184,14,14,1) 0%, rgba(22,27,166,1) 100%)"}}>X/Y</button>
                <button name="gen7a" id="button-sm" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(233,125,30,1) 0%, rgba(40,182,255,1) 100%)"}}>Sun/Moon</button>
                <button name="gen7b" id="button-usum" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(233,125,30,1) 0%, rgba(40,182,255,1) 100%)"}}>Ultra Sun/Ultra Moon</button>
                <button name="gen8" id="button-swsh" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(0,142,255,1) 0%, rgba(255,40,91,1) 100%)"}}>Sword/Shield</button>
                <button name="gen9" id="button-sv" className="gen-button" onClick={handleGen} style={{background: "linear-gradient(90deg, rgba(110,0,41,1) 0%, rgba(123,40,255,1) 100%)"}}>Scarlet/Violet</button>
            </div>
    )
}