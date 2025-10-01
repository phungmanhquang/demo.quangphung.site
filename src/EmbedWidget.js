import { getWidgetData } from "./api";

export class EmbedWidget extends HTMLElement {
    shadown;

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadow.innerHTML = `
            <h5>embed widget</h5>
            <ul class="embed-widget">
            </ul>
        `
    }

    setConfig() {
        const embedWidgetEl = this.shadow.querySelector('.embed-widget')
        const data = getWidgetData() // [{ name: ..., description: ...}]
        data.map((item) => {
            const liEL = document.createElement('li')
            liEL.textContent = `${item.name} - ${item.description}`
            embedWidgetEl.appendChild(liEL)
        })
    }
}