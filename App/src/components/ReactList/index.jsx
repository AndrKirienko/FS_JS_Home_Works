import React from 'react'

function ReactList({users}) {
	// const { users } = props
	// const { id, name } = users
	console.log(users);
	return <div>{users.map(u => <p>{u.name}</p>)}</div>
}

export default ReactList
