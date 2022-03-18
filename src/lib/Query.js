import { gql } from '@apollo/client';

const VOTERS = gql`
	query voters($age: String!) {
		voters(age: $age) {
			id
			name
			age
			address
		}
	}
`;

const NEW_VOTERS = gql`
	mutation newVoters($name: String!, $age: Int!, $address: String!) {
		newVoters(name: $name, age: $age, address: $address) {
			id
			name
			age
			address
		}
	}
`;

export { VOTERS, NEW_VOTERS };
