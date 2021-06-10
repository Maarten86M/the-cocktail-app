import React,{useContext} from "react";
import './SelectButton.css';
import {CocktailContext} from "../../../Context/CocktailContext";

function SelectButton() {

        const {
            letter,
            setLetter
        } = useContext(CocktailContext);

        console.log("Welke letter is er aangeklikt", letter)

    return (
        <div>
            <select name="letter" id="letter" onChange={(event) => setLetter(event.target.value)}>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
                <option value="g">G</option>
                <option value="h">H</option>
                <option value="i">I</option>
                <option value="j">J</option>
                <option value="k">K</option>
                <option value="l">L</option>
                <option value="m">M</option>
                <option value="n">N</option>
                <option value="o">O</option>
                <option value="p">P</option>
                <option value="q">Q</option>
                <option value="r">R</option>
                <option value="s">S</option>
                <option value="t">T</option>
                <option value="v">V</option>
                <option value="w">W</option>
                <option value="y">Y</option>
                <option value="z">Z</option>
            </select>
        </div>
    )
}

export default SelectButton;