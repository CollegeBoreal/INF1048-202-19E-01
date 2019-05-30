const div = document.createElement('div');
const shadowRoot = div.attachShadow({mode: 'open'});
shadowRoot.innerHTML = `
<div class="lightdom"> I am in the shadow DOM </div>
`;
document.body.appendChild(div);

