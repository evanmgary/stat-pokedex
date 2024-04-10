'use client'

import GenSelect from "./GenSelect"
import "./Controls.css"

export default function Controls(props){
    const {setGeneration, setGenerationNum, totalStats, setTotalStats, setSearchText, statsLessThan, setStatsLessThan, dlc}= props

    function handleStats(e){
        console.log(e.target.value)
        setTotalStats(e.target.value)
    }

    function handleSearchText(e){
        setSearchText(e.target.value)
    }

    function handleLessToggle(e){
        setStatsLessThan(!statsLessThan)
    }

    return(
        <div id="controls" className="control-panel">
            <GenSelect pageType="table" setGeneration={setGeneration} setGenerationNum={setGenerationNum} dlc={dlc}/>
            <div id="dlc-toggle">

            </div>
            <div id="stats-panel" className="panel">
                <input
                    type="range"
                    id="stats-slider"
                    value={props.totalStats}
                    min={100}
                    max={800}
                    onChange={handleStats}
                />
                <button id="less-greater-toggle" onClick={handleLessToggle} >{(statsLessThan ? "Max:" : "Min:" + " ") + totalStats}</button>
            </div>
            <div id="search-panel" className="panel">
                <input type="search" id="search-input" onKeyUp={handleSearchText}/>
            </div>
        </div>
    )
}