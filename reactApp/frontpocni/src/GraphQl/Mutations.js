import { gql } from "@apollo/client"

export const CREATE_APPLICANT = gql`
mutation($firstName: String! , $lastName: String!, $email: String!, $password: String!, $skills: String! ) {
	createApplicant(
		input: {
			firstName: $firstName
			lastName: $lastName
			email: $email
			password:  $password
			skills: $skills
		}
	) {
		firstName
		lastName
		skills
	}
}

`

export const CREATE_COMPANY = gql`
mutation($companyName: String!, $companyIdentificator: String!, $companyDescription: String!, $password: String!){
    createCompany(
        input: {
            companyName: $companyName
            companyIdentificator: $companyIdentificator
            companyDescription: $companyDescription
            password: $password
        }
    )
    {
        id
        companyName
        companyDescription
    }
}

`

export const DELETE_APPLICANT = gql`
mutation ($id: ID!) {
    deleteApplicant(id: $id ) 
  }
`

export const DELETE_COMPANY = gql`
mutation ($id: ID!) {
    deleteCompany(id: $id ) 
  }

`

export const ADD_APPLICANT_TO_COMPANY =gql `
mutation ($companyId: ID!, $applicantId: ID!) {
    addApplicantToCompany(companyId: $companyId, applicantId: $applicantId) {
      companyName
      companyDescription
      applicants {
        companyId
        firstName
        lastName
      }
    }
  }
`