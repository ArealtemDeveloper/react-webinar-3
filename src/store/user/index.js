import StoreModule from "../module";

class User extends StoreModule {
    initState() {
        return {
            user: null,
            isAuth: false,
            error: false,
        }
    }

    async signIn(login, password) {
        const data = { "login": login, "password": password }
        try {
        
            const response = await fetch('/api/v1/users/sign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            if (response?.ok || response.status === 200) {
                const json = await response.json();
                console.log(json)
                localStorage.setItem('token', json.result.token);
        
                // Пользователь авторизован
                this.setState({ 
                    ...this.getState(), 
                    isAuth: true, 
                    user: json.result.user, 
                    error: null
                });
        
              } else {
                this.setState({ 
                    ...this.getState(),
                     error: `${response.status} ${response.statusText}`
                 })
              }

        } catch (error) {
            console.log(error);
        }
    }

    async getUser() {
        try {
            this.setState({ ...this.getState(), isAuth: false});
            const response = await fetch(`/api/v1/users/self`, {
                method: 'GET',
                headers: {
                    'X-Token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            })
            const json = await response.json()
            this.setState({
                ...this.getState(),
                user: json.result,
                isAuth: true,
            })

        } catch (error) {
            console.log(error)
        }
    }

    async signOut() {
        try {
            
            const response = await fetch(`/api/v1/users/sign`, {
                method: 'DELETE',
                headers: {
                    'X-token': localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            })
            localStorage.removeItem('token')

            this.setState({
                ...this.getState(),
                user: null,
                isAuth: false,
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export default User;