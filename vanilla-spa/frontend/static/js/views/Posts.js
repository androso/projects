import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTitle("Posts") 
    }
    async getHTML () {
        return `
        <h1>The Posts Section!!</h1>
        <p>You're viewing the posts list</p>
        <p>
        Lore-m ipsum dolor sit amet consectetur, adipisicing elit. Facilis adipisci doloremque earum blanditiis pariatur, ex incidunt illum repellendus vel quia!
        </p>
        `;
    }
}