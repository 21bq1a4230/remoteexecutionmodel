import React,{Component} from "react";
import "./Playground.css"


class Playground extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    scroll = () => {
        var codeEditor = document.getElementById('codeEditor');
        var lineCounter = document.getElementById('lineCounter');
        lineCounter.scrollTop = codeEditor.scrollTop;
        lineCounter.scrollLeft = codeEditor.scrollLeft;
    }

    keyDown = (e) => {
        let { keyCode } = e;
       let { value, selectionStart, selectionEnd } = e.target;
if (keyCode === 9) {  // TAB = 9
         e.preventDefault();
         e.target.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
         e.target.setSelectionRange(selectionStart+2, selectionStart+2)
       }
    }


   render(){
    return(
        <div className="playground">
            <div className="pg-area">
                <div className="pg-lang">
                    <select>
                        <option value="py">python</option>
                        <option value="java">java</option>
                        <option value="c">c</option>
                        <option value="js">javascript</option>
                    </select>
                </div>
                {/* <input type="text"  /> */}
                <div className="pg-inputFields">
                    {/* <textarea className="pg-linecounter" wrap='off' id="lineCounter" readOnly>1.</textarea> */}
                    <textarea 
                        className="pg-input" 
                        wrap='off' 
                        id="codeEditor" 
                        onScroll={this.scroll}
                        onKeyDown={this.keyDown}>

                    </textarea>
                </div>
                <input type="submit" className="pg-submit"/>
            </div>
        </div>
    )
   }
}


export default Playground