// Weather object
class Weather {
    constructor(city){
        this.city = city;
        this.secretKey = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '99387b5f1fmsh2a87bbd129b009bp198c82jsnf48163682914',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
    } 

    async getWeather(){
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${this.city}`, this.secretKey);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city){
        this.city = city;
    }
}