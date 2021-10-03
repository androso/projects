import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Posts");
    }
    async getHTML () {
        return `
        <h1>We're in the settings!!!</h1>
        <p>Settings do something brr</p>
        <p>
        Lore-m ipsum dolor sit amet consectetur, adipisicing elit. Facilis adipisci doloremque earum blanditiis pariatur, ex incidunt illum repellendus vel quia!
        </p>
        `;
    }
}