import { gql } from "@apollo/client"


export const FETCH_APPLICANTS = gql`
query{
    applicants{
        id
        firstName
        lastName
        email
        skills
    }
}
`

export const FETCH_COMPANIES = gql`
query{
    companies{
        id
        companyName
        companyDescription
        companyIdentificator
    }
}
`