vbox = new sap.m.VBox({ // X-axis of risk matrix & factory for the remaining cells
    items: {
        path: "mRiskMatrix>matrixData",
        templateShareable: false,
        factory: () => {
            debugger
            return new sap.m.FlexBox({
                items: [
                    new sap.m.FlexBox({
                        alignItems: "Center",
                        justifyContent: "Start",
                        height: "100%",
                        width: "100%",
                        items: [
                            new sap.m.Label({
                                width: "6.5rem",
                                textAlign: "Right",
                                text: "{mRiskMatrix>firstColumn/text}",
                                tooltip: "{mRiskMatrix>firstColumn/text}"
                            }).addStyleClass("apmCustomHeadingTextColor").addStyleClass("sapUiSmallMarginBegin")
                        ]
                    }).addStyleClass("apmCustomRiskMatrixRowItem"),
                    new sap.m.FlexBox({
                        alignItems: "Start",
                        width: "calc(100% - 8rem)",
                        items: {
                            path: "mRiskMatrix>columns",
                            templateShareable: false,
                            factory: (sColumnCellId, oColumnCellContext) => {
                                debugger;
                                const oColumnCellData = oColumnCellContext.getObject();
                                let oColumnCellTemplate;
                                const oProperties = {};
                                let oCellControl = {};
                                const sRiskMatrixText = "{mRiskMatrix>text}";

                                if (oColumnCellData.axisHeading) {
                                    // These is the cell control showing x-axis heading
                                    oProperties.width = oColumnCellData.width;
                                    oCellControl = new sap.m.Text({
                                        width: "90%",
                                        text: sRiskMatrixText,
                                        tooltip: sRiskMatrixText,
                                        textAlign: "Center",
                                        wrapping: false
                                    }).addStyleClass("apmCustomBoldText");
                                } else {
                                    // These are the cell controls showing x-axis readings i.e. the scale values
                                    oProperties.width = "7.5rem";
                                    oCellControl = new sap.m.Label({
                                        width: "90%",
                                        text: sRiskMatrixText,
                                        tooltip: sRiskMatrixText,
                                        textAlign: "Center"
                                    });
                                }
                                // These are the coloured clickable cells showing the intersection values
                                if (oColumnCellData.hasOwnProperty("value1")) {
                                    oProperties.width = "7.5rem";
                                    oCellControl = [
                                        new sap.m.Link({
                                            text: sRiskMatrixText,
                                            press: this._oRiskMatrixHandler.onPressRiskMatrixCellValues.bind(this._oRiskMatrixHandler)
                                        }).addStyleClass("apmCustomRiskMatrixClickableCellWrapper")
                                    ];
                                    if (oImpactData.thresholds) {
                                        for (let i = 0; i < oImpactData.thresholds.length; i++) {
                                            if (parseFloat(oColumnCellData.calculatedCellValue) >= oImpactData.thresholds[i].rangeFrom &&
                                                parseFloat(oColumnCellData.calculatedCellValue) <= oImpactData.thresholds[i].rangeTo) {
                                                const sColor = oImpactData.thresholds[i].color;
                                                oCellControl[0].addStyleClass(this._oRiskMatrixHandler._fnGetColorConstraintsClass(sColor)); // cell text color
                                                oCellControl.push(
                                                    // This is needed to set custom colors to the cell background based on thresholds
                                                    new sap.ui.core.HTML({
                                                        content: [
                                                            `<div style='background-color:${oImpactData.thresholds[i].color};height:100%;width:100%;'></div>`
                                                        ]
                                                    })
                                                );
                                                break;
                                            }
                                        }
                                    }
                                    if (oAssessmentTemplate.alphanumericThresholds) {
                                        // goes the logic for the same.
                                        for (let i = 0; i < oAssessmentTemplate.alphanumericThresholds.length; i++) {
                                            if (oColumnCellData.text === oAssessmentTemplate.alphanumericThresholds[i].xAxisValue.concat(oAssessmentTemplate.alphanumericThresholds[i].yAxisValue)) {
                                                const sColor = oAssessmentTemplate.alphanumericThresholds[i].color;
                                                oCellControl[0].addStyleClass(this._oRiskMatrixHandler._fnGetColorConstraintsClass(sColor)); // cell text color
                                                oCellControl.push(
                                                    // This is needed to set custom colors to the cell background based on thresholds
                                                    new sap.ui.core.HTML({
                                                        content: [
                                                            `<div style='background-color:${oAssessmentTemplate.alphanumericThresholds[i].color}
                                                                ;height:100%;width:100%;'></div>`
                                                        ]
                                                    })
                                                );
                                                break;
                                            }
                                        }
                                    }
                                }
                                oColumnCellTemplate = new sap.m.FlexBox({
                                    renderType: "Bare",
                                    width: oProperties.width,
                                    alignItems: "Center",
                                    justifyContent: "Center",
                                    height: "100%",
                                    items: oCellControl
                                });

                                if (!oColumnCellData.noBorder) {
                                    oColumnCellTemplate.addStyleClass("apmCustomRiskMatrixBorder");
                                    // AT Preview Heat map
                                    if (this._oRiskMatrixHandler._sAppContext === "AT") {
                                        oColumnCellTemplate.addStyleClass("apmCustomHeatMapBorder");
                                    }
                                }
                                if (!oColumnCellData.hasOwnProperty("value1")) {
                                    oColumnCellTemplate.getItems()[0].addStyleClass("apmCustomHeadingTextColor");
                                }
                                if (oColumnCellData.isSelected) {
                                    oImpactData.calculatedRiskValue = parseFloat(oColumnCellData.calculatedCellValue);
                                    oColumnCellTemplate.getItems()[0].addStyleClass("apmCustomRiskMatrixSelectedItem");
                                }

                                return oColumnCellTemplate;
                            }
                        }
                    }).addStyleClass("apmCustomRiskMatrixRowItemData")
                ]
            }).addStyleClass("apmCustomRiskMatrixRow");
        }
    }
})