var component = {
    Sample: {
        states : {
            default : {
                markup : `
                            <div id="cardControlDummy" class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiSmallMarginTopBottom sapUiSmallMarginBeginEnd sapMFlexItem" draggable="true" ondragstart="drag(event)">

                                <span aria-hidden="true" class="sapUiHiddenPlaceholder"></span>
                         </div>`
            }
        }
    },
    card : {
        states : {
            default : {
                markup : `         
        <div id="cardControlWorks" class="sapFCard sapUiMediumMargin" style="width: 300px;" draggable="true" ondragstart="drag(event)">
            <div id="__header1" data-sap-ui="__header1" data-sap-ui-fastnavgroup="true" role="group"  aria-roledescription="Card Header" class="sapFCardHeader">
               <div id="__header1-focusable" tabindex="0" aria-labelledby="__card1-ariaText __text4 __text5"
                  class="sapFCardHeaderWrapper">
                  <div class="sapFCardHeaderText">
                     <div class="sapFCardHeaderTextFirstLine"><span id="__text4" data-sap-ui="__text4" dir="auto"
                        role="heading" aria-level="3"
                        class="sapMText sapUiSelectable sapMTextMaxLineWrapper sapMTextMaxWidth sapFCardTitle"
                        style="text-align: left;"><span id="__text4-inner"
                        class="sapMTextMaxLine sapMTextLineClamp"
                        style="-webkit-line-clamp: 3;">Assessed Objects</span></span></div>
                     <div class="sapFCardHeaderTextSecondLine"><span id="__text5" data-sap-ui="__text5"
                        dir="auto"
                        class="sapMText sapUiSelectable sapMTextMaxLineWrapper sapMTextMaxWidth sapFCardSubtitle"
                        style="text-align: left;"><span id="__text5-inner"
                        class="sapMTextMaxLine sapMTextLineClamp" style="-webkit-line-clamp: 2;">Objects
                        that are assessed</span></span>
                     </div>
                  </div>
               </div>
            </div>
            <div id="__card1-contentSection" role="group" aria-labelledby="__card1-ariaContentText"
               class="sapFCardContent">
               <div id="__list0" data-sap-ui="__list0" data-sap-ui-fastnavgroup="true"
                  class="sapMList sapMListBGSolid" style="width: 100%;">
                  <div id="__list0-before" tabindex="-1" class="sapMListDummyArea"></div>
                  <ul id="__list0-listUl" role="list" tabindex="0"
                     class="sapMListItems sapMListUl sapMListShowSeparatorsNone sapMListModeNone">
                     <li id="__item2-__list0-0" data-sap-ui="__item2-__list0-0" tabindex="-1" role="listitem"
                        aria-roledescription="List Item" aria-posinset="1" aria-setsize="3"
                        class="sapMLIB sapMLIB-CTX sapMLIBShowSeparator sapMLIBTypeInactive sapMLIBFocusable sapMCLI">
                        <div id="__item2-__list0-0-content" class="sapMLIBContent">
                           <div id="__hbox2-__list0-0" data-sap-ui="__hbox2-__list0-0"
                              class="sapMFlexBox sapMHBox sapMFlexBoxJustifySpaceBetween sapMFlexBoxAlignItemsCenter sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent">
                              <div id="__vbox1-__list0-0" data-sap-ui="__vbox1-__list0-0"
                                 class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiSmallMarginBegin sapUiSmallMarginTopBottom sapMFlexItem">
                                 <div id="__data5"
                                    class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                    style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                    <h3 id="__title0-__list0-0" data-sap-ui="__title0-__list0-0"
                                       class="sapMTitle sapMTitleStyleAuto sapMTitleNoWrap sapUiSelectable sapMTitleMaxWidth">
                                       <span id="__title0-__list0-0-inner" dir="auto">Engine</span>
                                    </h3>
                                 </div>
                                 <div id="__data6"
                                    class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                    style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                    <span id="__text0-__list0-0" data-sap-ui="__text0-__list0-0" dir="auto"
                                       class="sapMText sapUiSelectable sapMTextBreakWord sapMTextMaxWidth"
                                       style="text-align: left;">ID23452256-D44</span>
                                 </div>
                              </div>
                              <div id="__data7"
                                 class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                 style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                 <div id="__status0-__list0-0" data-sap-ui="__status0-__list0-0"
                                    aria-roledescription="Object Status" role="group"
                                    class="sapMObjStatus sapMObjStatusSuccess sapUiTinyMargin sapUiSmallMarginEnd">
                                    <span id="__status0-__list0-0-text" dir="ltr"
                                       class="sapMObjStatusText">27.25K EUR</span><span
                                       id="__status0-__list0-0-state"
                                       class="sapUiPseudoInvisibleText">Entry validated successfully</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li id="__item2-__list0-1" data-sap-ui="__item2-__list0-1" tabindex="-1" role="listitem"
                        aria-roledescription="List Item" aria-posinset="2" aria-setsize="3"
                        class="sapMLIB sapMLIB-CTX sapMLIBShowSeparator sapMLIBTypeInactive sapMLIBFocusable sapMCLI">
                        <div id="__item2-__list0-1-content" class="sapMLIBContent">
                           <div id="__hbox2-__list0-1" data-sap-ui="__hbox2-__list0-1"
                              class="sapMFlexBox sapMHBox sapMFlexBoxJustifySpaceBetween sapMFlexBoxAlignItemsCenter sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent">
                              <div id="__vbox1-__list0-1" data-sap-ui="__vbox1-__list0-1"
                                 class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiSmallMarginBegin sapUiSmallMarginTopBottom sapMFlexItem">
                                 <div id="__data8"
                                    class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                    style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                    <h3 id="__title0-__list0-1" data-sap-ui="__title0-__list0-1"
                                       class="sapMTitle sapMTitleStyleAuto sapMTitleNoWrap sapUiSelectable sapMTitleMaxWidth">
                                       <span id="__title0-__list0-1-inner" dir="auto">Reactor XT</span>
                                    </h3>
                                 </div>
                                 <div id="__data9"
                                    class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                    style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                    <span id="__text0-__list0-1" data-sap-ui="__text0-__list0-1" dir="auto"
                                       class="sapMText sapUiSelectable sapMTextBreakWord sapMTextMaxWidth"
                                       style="text-align: left;">ID27852256-D47</span>
                                 </div>
                              </div>
                              <div id="__data10"
                                 class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                 style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                 <div id="__status0-__list0-1" data-sap-ui="__status0-__list0-1"
                                    aria-roledescription="Object Status" role="group"
                                    class="sapMObjStatus sapMObjStatusError sapUiTinyMargin sapUiSmallMarginEnd">
                                    <span id="__status0-__list0-1-text" dir="ltr"
                                       class="sapMObjStatusText">7.35K EUR</span><span
                                       id="__status0-__list0-1-state"
                                       class="sapUiPseudoInvisibleText">Invalid entry</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li id="__item2-__list0-2" data-sap-ui="__item2-__list0-2" tabindex="-1" role="listitem"
                        aria-roledescription="List Item" aria-posinset="3" aria-setsize="3"
                        class="sapMLIB sapMLIB-CTX sapMLIBShowSeparator sapMLIBTypeInactive sapMLIBFocusable sapMCLI">
                        <div id="__item2-__list0-2-content" class="sapMLIBContent">
                           <div id="__hbox2-__list0-2" data-sap-ui="__hbox2-__list0-2"
                              class="sapMFlexBox sapMHBox sapMFlexBoxJustifySpaceBetween sapMFlexBoxAlignItemsCenter sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent">
                              <div id="__vbox1-__list0-2" data-sap-ui="__vbox1-__list0-2"
                                 class="sapMFlexBox sapMVBox sapMFlexBoxJustifyStart sapMFlexBoxAlignItemsStretch sapMFlexBoxWrapNoWrap sapMFlexBoxAlignContentStretch sapMFlexBoxBGTransparent sapUiSmallMarginBegin sapUiSmallMarginTopBottom sapMFlexItem">
                                 <div id="__data11"
                                    class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                    style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                    <h3 id="__title0-__list0-2" data-sap-ui="__title0-__list0-2"
                                       class="sapMTitle sapMTitleStyleAuto sapMTitleNoWrap sapUiSelectable sapMTitleMaxWidth">
                                       <span id="__title0-__list0-2-inner" dir="auto">Filter</span>
                                    </h3>
                                 </div>
                                 <div id="__data12"
                                    class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                    style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                    <span id="__text0-__list0-2" data-sap-ui="__text0-__list0-2" dir="auto"
                                       class="sapMText sapUiSelectable sapMTextBreakWord sapMTextMaxWidth"
                                       style="text-align: left;">ID123555587-I05</span>
                                 </div>
                              </div>
                              <div id="__data13"
                                 class="sapMFlexItemAlignAuto sapMFlexBoxBGTransparent sapMFlexItem"
                                 style="order: 0; flex: 0 1 auto; min-height: auto; min-width: auto;">
                                 <div id="__status0-__list0-2" data-sap-ui="__status0-__list0-2"
                                    aria-roledescription="Object Status" role="group"
                                    class="sapMObjStatus sapMObjStatusWarning sapUiTinyMargin sapUiSmallMarginEnd">
                                    <span id="__status0-__list0-2-text" dir="ltr"
                                       class="sapMObjStatusText">22.89K EUR</span><span
                                       id="__status0-__list0-2-state"
                                       class="sapUiPseudoInvisibleText">Warning issued</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
                  <div id="__list0-after" tabindex="0" class="sapMListDummyArea sapMListDummyAreaSticky"></div>
               </div>
            </div>
            <span id="__card1-ariaText" data-sap-ui="__card1-ariaText" aria-hidden="true"
               class="sapUiInvisibleText">Card</span><span id="__card1-ariaContentText"
               data-sap-ui="__card1-ariaContentText" aria-hidden="true" class="sapUiInvisibleText">Card
            Content</span>
         </div>`
            }
        }
    }
}