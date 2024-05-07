'use client'
import DexTable from "../components/DexTable"
import Controls from "../components/Controls"
import allPokes from "../data/alldata.json"
import { useState } from "react"
import "./App.css"

export default function Page() {
    
    const [generation, setGeneration] = useState(["national"])
    const [generationNum, setGenerationNum] = useState(0)
    const [totalStats, setTotalStats] = useState(500)
    const [searchText, setSearchText] = useState("")
    const [dlc, setDlc] = useState(false)
    const [statsLessThan, setStatsLessThan] = useState(true)
    const [ascending, setAscending] = useState(false)
    const [sortOn, setSortOn] = useState("id")

    

    return (
        <div className="App">
            <h1 className="main-title">Stat Pokedex</h1>
            <Controls setGeneration={setGeneration} totalStats={totalStats} setTotalStats={setTotalStats} setSearchText={setSearchText} dlc={dlc} setDlc={setDlc} statsLessThan={statsLessThan} setStatsLessThan={setStatsLessThan} setGenerationNum={setGenerationNum}/>
            <DexTable allPokes={allPokes} generation={generation} generationNum={generationNum} totalStats={totalStats} 
            searchText={searchText} statsLessThan={statsLessThan} setStatsLessThan={setStatsLessThan}
            ascending={ascending} setAscending={setAscending} sortOn={sortOn} setSortOn={setSortOn}/>
            <h3 className="copyright">Pokemon images and names copyright Nintendo 1995-2024. Data sourced from PokeAPI.</h3>
    </div>
  );
}

