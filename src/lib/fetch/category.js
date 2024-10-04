import apiURL from "../apiURL"

class Category {

    static async getAllUrgency() {
        try {
            const response = await fetch(`${apiURL}/categories/urgency`);
            const data = await response.json();
            return data;

        } catch (err) {
            console.log(err)
        }
    }

    static async getAllActivity() {
        try {
            const response = await fetch(`${apiURL}/categories/activity`);
            const data = await response.json();
            return data;
            
        } catch (err) {
            console.log(err)
        }
    }
}

export default Category;