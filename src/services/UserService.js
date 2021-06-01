export async function getAllUsers() {

    const response = await fetch('/api/user/');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/user/signup`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}