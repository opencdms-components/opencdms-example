import { defineCustomElement } from 'vue';
import HelloWorld from './components/HelloWorldComponent.vue';

const element = defineCustomElement(HelloWorld);

customElements.define("opencdms-helloworld",element);