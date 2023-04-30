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

// export const DELETE_APPLICANT = gql`


// `

// export const DELETE_COMPANY = gql`


// `