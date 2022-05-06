import {v4 as uuidV4} from "uuid"

let users = [
    {
        name: 'John',
        age: 20,
        id: uuidV4()
    },
    {
        name: 'James',
        age: 21,
        id: uuidV4()
    },
    {
        name: 'William',
        age: 23,
        id: uuidV4()
    }
]


export const getUsers = function(req, res) {
    res.json(users)
}

export const createUser = function(req, res) {
    const { name, age } = req.body

    users.push({
        name,
        age,
        id: uuidV4()
    })

    res.json(users)
}

export const getOneUser = function(req, res) {
    const userId = req.params.id

    const user = users.find(function(user) {
        return user.id === userId
    })

    res.json(user)
}

export const deleteUser = function(req, res) {
    const userId = req.params.id

    users = users.filter(function(user) {
        return user.id !== userId
    })

    res.json(users)
}

export const updateUser = function(req, res) {
    const userId = req.params.id
    const {age, name} = req.body

    users = users.map(function(user) {
        if(user.id === userId) {
            return {
                name,
                age,
                id: user.id
            }
        }

        return user
    })

    res.json(users)
}