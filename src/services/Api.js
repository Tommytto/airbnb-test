class Api {
    async request(url, options) {
        const response = await fetch(url, options);
        return response.json();
    }

    getPageInfo() {
        return this.request('/card-grid.json');
    }
}

export default new Api();
