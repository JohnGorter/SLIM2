
import { html, PolymerElement as Element } from '/node_modules/@polymer/polymer/polymer-element.js'


const htmlTemplate = html`
<style include="slim-theme">
</style>
<div class="slider-splatters"><h5>Huizen, Tuinen, Alles!</h5></div>`


export class SlimSplatters extends Element {
    static get template() { return htmlTemplate; }
}

customElements.define('slim-splatters', SlimSplatters);