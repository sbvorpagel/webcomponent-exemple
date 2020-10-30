const template = document.createElement('template');

template.innerHTML = `
    <style>
        .user-card {
            font-family: 'Arial', sans-serif;
            background: #E3F2FD;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-bottom: #2196F3 4px solid;
        }

        .user-card img {
            width: 100%;
        }

        .user-card button {
            cursor: pointer;
            background: #2196F3;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>
    <div class="user-card">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p><slot name="email" /></p>
                <p><slot name="phone" /></p>
            </div>
            <button id="toggle-info">Hide Info</button>
        </div>
    </div>
`

class UserCard extends HTMLElement {
    constructor() {
        super();
        
        this.showInfo = true;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    toggleEvent = () => {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector(".info");
        const button = this.shadowRoot.querySelector("#toggle-info");

        if (this.showInfo) {
            info.style.display = "block";
            button.innerText = "Hide Info";
        } else {
            info.style.display = "none";
            button.innerText = "Show Info";
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").addEventListener("click", this.toggleEvent)
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").removeEventListener();
    }
}

window.customElements.define("user-card", UserCard);