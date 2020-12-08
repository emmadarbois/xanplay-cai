class HTMLInclude extends HTMLElement {
    constructor(src) {
        super();
        if (src) this.textContent = src;
        setTimeout(() => this._load());
    }
    async _load() {
        const src = this.textContent.trim();
        if (!src) throw new Error("URL missing between <html-include> tags.");
        const rsp = await fetch(src);
        if (rsp.status !== 200) throw new Error(`Failed to load file (${src}) for <html-include>.`);
        this.innerHTML = await rsp.text();
    }
}
customElements.define("html-include", HTMLInclude);