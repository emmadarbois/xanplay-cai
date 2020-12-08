class PageView extends HTMLElement {
    constructor() {
        super();
        setTimeout(() => this._load());
    }
    async _load() {
        const page = window.location.search.substring(1);
        const src = `./pages/${page === "" ? "accueil" : page}.html`;
        const rsp = await fetch(src);
        if (rsp.status !== 200) window.location.href = "/";
        this.innerHTML = await rsp.text();
    }
}
customElements.define("page-view", PageView);