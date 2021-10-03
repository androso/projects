import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Dashboard");
    }
    async getHTML () {
        return `
        <h1>Welcome Back!!</H1>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis adipisci doloremque earum blanditiis pariatur, ex incidunt illum repellendus vel quia!
        </p>
        <p>
            <a href="/posts" data-link>View recent posts </a>
        </p>
        `;
    }
}