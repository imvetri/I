/*


// I am showing the list page which shows i..e description, id, riskType, status and updateOn Vs. 

query assessments($first: Int!,$offset: Int!, $filter: AssessmentFilterInput!) {
    assessments(first: $first, offset: $offset, filter: $filter) {
        edges {
            node {
                id
                displayValue
                status
                description {
                    long
                    short
                    language
                }
                descriptions {
                    long
                    short
                    language
                }
                scopeDescriptions {
                    long
                    short
                    language
                }
                riskType
                currency {
                    ssid
                    code
                    text
                    shortText
                }
                createdOn
                updatedOn
            }
        }
        totalCount
    }
}

// I am showing details page where I show description, id, riskType, status and updateOn and Long description, scope 

query assessment($id: String!) {
        assessment(id: $id) {
            id
            displayValue
            status
            description {
                long
                short
                language
            }
            descriptions {
                long
                short
                language
            }
            scopeDescriptions {
                long
                short
                language
            }
            riskType
            currency {
                ssid
                code
                text
                shortText
            }
            createdOn
            updatedOn
        }
}


// I am showing assignments Tab page where I show only assignedObjects


query assessmentTechnicalObjects($id: String!, $search: String, $orderBy: AssignmentsSortInput, $filter: AssignmentsFilterInput) {
                    assessmentTechnicalObjects(offset: 0, first: 9999, id: $id, search: $search, orderBy: $orderBy, filter: $filter) {
                        edges {
                            node {
                                technicalObjectNumber
                                technicalObjectSsid
                                technicalObjectType
                                technicalObjectLabelName
                                technicalObjectDescription
                                assessmentTemplateId
                                assessmentTemplateVersion
                                assessmentTemplateDisplayValue
                                assessmentTemplateDescriptions {
                                    short
                                    long
                                    language
                                }
                                riskScore, color, action, documentsCount, completedImpacts, totalImpacts, alphanumericRiskScore,
                                criticality {
                                    ssid
                                    code
                                    text
                                }
                                questionnaireImpact {
                                    impactScore
                                    alphanumericImpactScore
                                    financialRisk
                                    id
                                    isRelevant
                                    questionnaireDimensions {
                                        dimensionId, questionnaireId, selectedScaleId, selectedScaleValue
                                        notes { short, long, language }
                                    }
                                }
                            }
                        }
                        pageInfo {
                            hasNextPage
                        }
                    }
                }


// I am doing a data export which needs to show all the fields with assigned objects 
and also assessment template header, description id and displayValue


*/