let token = 'b23007b973f15751b97c1ccbcae507d2993523be04dd6379'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://carinventory.glitch.me/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://carinventory.glitch.me/api/cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://carinventory.glitch.me/api/cars/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data) 
        });

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async(id: string) => {
        const response = await fetch(`https://carinventory.glitch.me/api/cars/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }
    }
}
