async function getUsers(userIds) {
    const request = userIds.map(id =>
        fetch(`/users/${id}`).then(res => res.json())
    );
    const result = await Promise.all(request);
    return result;
}