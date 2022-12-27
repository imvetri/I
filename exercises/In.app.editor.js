$("#meAreaHeaderButton")[0].innerText = "Edit"
$("#meAreaHeaderButton")[0].style.color= "white"

// Create container

var cards = "";



cards = Object.keys(component).map(key => {
    var name = key ; 
    var markup = component[key].states.default.markup;
    var card = `
    <div id="${name}" class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiTinyMarginEnd sapUiTinyMarginBottom">
    <div
       class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGSolid sapUiSmallMarginTop sapUiTinyMarginBegin sapUiMediumMarginBottom sapMFlexItem" >
       <div
          class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiSmallMarginTop sapUiSmallMarginBegin sapMFlexItem">
          <div class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
             style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><span
             class="sapMLabel sapUiSelectable sapMLabelMaxWidth"
             style="font-weight: bold; text-align: left;"><span id="" class="sapMLabelTextWrapper"><bdi
             id="">"${name}"</bdi></span></span></div>
       </div>
       ${markup}
    </div>
    </div>
    `
    return card
}).join("")
var containerHTML = 
    `
<div id="controlsContainerMovable" class="sapMPanelContent sapMPanelBGTranslucent" style="
   right: 0px;
   height: 100vh;
   width: 30%;
   background-color: darkgray;
   position:fixed;
   z-index:3">
   <button id="closeEditor">Close</button>
   <button id="loadControlsToEditor">Load</button>
    ${cards}
</div>

`


// render on screen

var controlsContainer = document.createElement("div");
controlsContainer.innerHTML = containerHTML
document.body.appendChild(controlsContainer);


// show it on click on edit

$("#meAreaHeaderButton")[0].onclick = function (event) {
    $("#controlsContainerMovable")[0].style.top="0px";
    event.stopPropagation();

}


$("#closeEditor")[0].onclick = function (){
        $("#controlsContainerMovable")[0].style.top="100vh";

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}


function allowDrop(ev) {
  ev.preventDefault();
}

document.body.ondragover = allowDrop

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var droppedControl = document.getElementById(data).cloneNode(true);
  droppedControl.setAttribute("id",data+"id")  
  ev.target.appendChild(droppedControl);
}

document.body.ondrop = drop;

function resetLoader(){
  document.body.onmouseover = ()=>{};
  document.body.onmouseout = ()=>{};
}

// Load controls to editor 
$("#loadControlsToEditor")[0].onclick  = function(){
    document.body.onmouseover= function (event){
        if(!window.targetMode){
                    event.target.style.border = "3px dashed red" 

        }
    }
    
    document.body.onmouseout= function (event){
        if(!window.targetMode){
        event.srcElement.style.border = "" 

        }
    }
    
    setTimeout(function(){
            document.body.onclick= function (event){
                window.targetMode = true;
                // get the current target innerHTML 
                var controlName = prompt();
                if(controlName){
                    event.srcElement.style.border = "";
                    window.targetMode = false;
                     pickedControl = event.srcElement.innerHTML.replace(">",' draggable="true" ondragstart="drag(event)">');
                    resetLoader();
                    var div = document.createElement("div")
                    div.innerHTML =  `
                      <div id="cardComponent" class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiTinyMarginEnd sapUiTinyMarginBottom"
                        >
                            <div
                                class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGSolid sapUiSmallMarginTop sapUiTinyMarginBegin sapUiMediumMarginBottom sapMFlexItem" >
                                <div
                                    class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiSmallMarginTop sapUiSmallMarginBegin sapMFlexItem">
                                    <div class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                        style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;"><span
                                            class="sapMLabel sapUiSelectable sapMLabelMaxWidth"
                                            style="font-weight: bold; text-align: left;"><span id="" class="sapMLabelTextWrapper"><bdi
                                                id="">${controlName}</bdi></span></span></div>
                                </div>

                            ${pickedControl}
                            </div>
                        </div>
                    `
                    $("#controlsContainerMovable")[0].appendChild(div)
                }
                document.body.onclick= function(){};
               
            }
    }, 5000)

}

