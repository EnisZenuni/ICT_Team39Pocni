import { gql } from "@apollo/client"


export const FETCH_APPLICANTS = gql`
query{
    applicants{
        firstName
        lastName
    }
}
`

export const FETCH_COMPANIES = gql`
query{
    companies{
        companyName
        companyDescription
    }
}
`