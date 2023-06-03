import StoreModule from "../module";

class User extends StoreModule {
    initState() {
        return {
            user: null,
        }
    }

    async signIn(data) {
        try {
            
            const response = await fetch('api/v1/users/sign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            const resultData = await response.json()
            localStorage.setItem('token', resultData.result.token);

            this.setState({
                ...this.getState(),
                user: resultData.result.user
            })

        } catch (error) {
            console.log(error);
        }
    }

    async getUser() {
        try {
            
            const response = await fetch(`api/v1/users/self`, {
                method: 'GET',
                headers: {
                    'X-Token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            })
            const resultData = await response.json()
            this.setState({
                ...this.getState(),
                user: resultData.result,
            })

        } catch (error) {
            console.log(error)
        }
    }

    async signOut() {
        try {
            
            const response = await fetch(`api/v1/users/sign`, {
                method: 'DELETE',
                headers: {
                    'X-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            })
            const resultData = await response.json()
            localStorage.removeItem('token')

            this.setState({
                ...this.getState(),
                user: null,
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export default User;