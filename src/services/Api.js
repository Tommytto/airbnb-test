class Api {
    async request(url, options) {
        const response = await fetch(url, options);
        return response.json();
    }

    getPageInfo() {
        const response = this.request('/card-grid.json');
        console.log(response);
        return response;
    }
}

export default new Api();
