import apiURL from "../apiURL";

class Todos {

    static async getAll(userId) {
        try {
            const response = await fetch(`${apiURL}/todos/${userId}`);
            const data = await response.json();
            return data
            
        } catch (err) {
            console.log(err);
        }
    }

    static async addTodo(params) {
        try {
            const formData = new FormData();
            const key = Object.keys(params);
            
            for(const val of key) {
                formData.append(val,params[val])
                console.log(val)
            }

            const response = await fetch(`${apiURL}/todos/create`, {
                method : 'POST',
                body : formData
            })
            const data = await response.json();
            return data;
            
        } catch (err) {
            console.log(err);
        }
    }
}

export default Todos;