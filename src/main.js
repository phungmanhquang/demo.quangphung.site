import { getConifgByClientId } from "./api";
import { EmbedWidget } from "./EmbedWidget";

(async function(){
  const url = new URL(import.meta.url); // Thông tin url file
  const clientId = url.searchParams.get("client-id") || ''; // lấy client id từ url file

  const clientConfig = getConifgByClientId(clientId) // { style: 'smaple' }

  customElements.define('embed-widget', EmbedWidget)

  document.addEventListener('DOMContentLoaded', () => {
    const EmbedWidgetEl = document.querySelector('embed-widget')
    EmbedWidgetEl.setConfig(clientConfig)
  })

})()