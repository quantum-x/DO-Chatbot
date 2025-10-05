// Get config from current script tag data attrs
function initGenAiChatbot() {
  let genaiWidgetScript = document.currentScript;

  let API_URL = genaiWidgetScript.getAttribute("data-api-url");

  if (!API_URL) {
    const parsedUrl = new URL(genaiWidgetScript.src);
    API_URL = `${parsedUrl.protocol}//${parsedUrl.host}`;
  }

  config = {
    API_URL,
    API_KEY: genaiWidgetScript.getAttribute("data-chatbot-id"),
    AGENT_ID: genaiWidgetScript.getAttribute("data-agent-id"),
    AGENT_NAME: genaiWidgetScript.getAttribute("data-name"),
    PRIMARY_COLOR: genaiWidgetScript.getAttribute("data-primary-color"),
    SECONDARY_COLOR: genaiWidgetScript.getAttribute("data-secondary-color"),
    LOGO: genaiWidgetScript.getAttribute("data-logo"),
    STARTING_MESSAGE: genaiWidgetScript.getAttribute("data-starting-message"),
    BUTTON_BACKGROUND_COLOR: genaiWidgetScript.getAttribute(
      "data-button-background-color"
    ),
    BUTTON_TEXT_COLOR: genaiWidgetScript.getAttribute("data-button-text-color"),
    RENDER_TARGET_ID: genaiWidgetScript.getAttribute("data-render-target-id"),
    BUTTON_LOCATION: genaiWidgetScript.getAttribute("data-button-location") || "bottom-right",
    BUTTON_PADDING_X: genaiWidgetScript.getAttribute("data-button-padding-x") || "0",
    BUTTON_PADDING_Y: genaiWidgetScript.getAttribute("data-button-padding-y") || "0",
    BUTTON_TEXT: genaiWidgetScript.getAttribute("data-button-text") || "",
    BUTTON_TEXT_TRANSLATIONS: genaiWidgetScript.getAttribute("data-button-text-translations") || "",
    INITIAL_WIDTH: "70px",
    INITIAL_HEIGHT: "70px",

  };

  // Determine button text based on translations
  let buttonText = config.BUTTON_TEXT;
  if (config.BUTTON_TEXT && config.BUTTON_TEXT_TRANSLATIONS) {
    try {
      const translations = JSON.parse(config.BUTTON_TEXT_TRANSLATIONS);
      const userLang = navigator.language || navigator.userLanguage;
      const langCode = userLang.split('-')[0]; // Get primary language code (e.g., 'en' from 'en-US')
      
      if (translations[langCode]) {
        buttonText = translations[langCode];
      }
    } catch (e) {
      console.warn("Failed to parse button text translations:", e);
    }
  }

  // Add button text to config
  config.BUTTON_TEXT_DISPLAY = buttonText;

  // Inject config into iframe src
  const scriptUrl = new URL(genaiWidgetScript.src);
  const origin = scriptUrl.origin;
  
  // Dynamically determine the base path from the widget.js script location
  // Remove the filename (widget.js) to get the directory path
  const scriptPath = scriptUrl.pathname;
  const basePath = scriptPath.substring(0, scriptPath.lastIndexOf('/'));
  
  const url = `${origin}${basePath}/index.html`;
  const urlWithParams = new URL(url);

  urlWithParams.searchParams.append("config", JSON.stringify(config));

  // Create iframe element
  const iframe = document.createElement("iframe");
  iframe.src = urlWithParams;
  iframe.title = "Chatbot Playground";
  iframe.style.border = "none";

  if (config.RENDER_TARGET_ID) {
    // poll for render target every second for 10 seconds
    let attempts = 0;
    const interval = setInterval(() => {
      const renderTarget = document.getElementById(config.RENDER_TARGET_ID);
      if (renderTarget) {
        iframe.style.position = "relative";
        iframe.width = "100%";
        iframe.height = "100%";
        renderTarget.appendChild(iframe);
        clearInterval(interval);
      }
      attempts++;
      if (attempts > 10) {
        clearInterval(interval);
      }
    }, 1000);
  } else {
    iframe.style.position = "fixed";
    iframe.style.zIndex = "9999";
    
    // Calculate initial width based on button text
    let initialWidth = "80px";
    let initialHeight = "80px";
    if (buttonText) {
      // Estimate width: 64px for icon + approximately 8px per character + 32px padding (16px each side) + 16px (1em) left padding for text
      const estimatedTextWidth = buttonText.length * 8;
      initialWidth = (64 + 16 + estimatedTextWidth + 32) + "px";
      initialHeight = "80px";
    }
    
    iframe.width = initialWidth;
    iframe.height = initialHeight;

    config.INITIAL_WIDTH = initialWidth;
    config.INITIAL_HEIGHT = initialHeight;

    // Apply button location positioning
    const paddingX = parseInt(config.BUTTON_PADDING_X) || 0;
    const paddingY = parseInt(config.BUTTON_PADDING_Y) || 0;

    // Reset all position properties
    iframe.style.top = "auto";
    iframe.style.bottom = "auto";
    iframe.style.left = "auto";
    iframe.style.right = "auto";

    switch (config.BUTTON_LOCATION) {
      case "bottom-left":
        iframe.style.bottom = (24 + paddingY) + "px";
        iframe.style.left = (24 + paddingX) + "px";
        break;
      case "bottom-center":
        iframe.style.bottom = (24 + paddingY) + "px";
        iframe.style.left = "50%";
        iframe.style.transform = "translateX(-50%)";
        break;
      case "bottom-right":
        iframe.style.bottom = (24 + paddingY) + "px";
        iframe.style.right = (24 + paddingX) + "px";
        break;
      case "top-left":
        iframe.style.top = (24 + paddingY) + "px";
        iframe.style.left = (24 + paddingX) + "px";
        break;
      case "top-center":
        iframe.style.top = (24 + paddingY) + "px";
        iframe.style.left = "50%";
        iframe.style.transform = "translateX(-50%)";
        break;
      case "top-right":
        iframe.style.top = (24 + paddingY) + "px";
        iframe.style.right = (24 + paddingX) + "px";
        break;
      default:
        // Default to bottom-right
        iframe.style.bottom = (24 + paddingY) + "px";
        iframe.style.right = (24 + paddingX) + "px";
    }

    document.body.appendChild(iframe);
  }

  // Handle messages from iframe
  window.addEventListener("message", (event) => {
    if (event.origin !== origin) {
      return;
    }
    if (event.data.type === "resize" && !config.RENDER_TARGET_ID) {
      if (event.data.payload.width == "70px") {
        //Default dimensions, so intercept with calculated dimensions..
        iframe.width = config.INITIAL_WIDTH;
        iframe.height = config.INITIAL_HEIGHT;
      } else {
        iframe.width = event.data.payload.width;
        iframe.height = event.data.payload.height;        
      }
      if (!event.data.payload.expanded) {
        iframe.style.maxWidth = "calc(100vw - 24px)";
        iframe.style.maxHeight = "calc(100vh - 24px)";
        
        // Reapply positioning based on button location
        const paddingX = parseInt(config.BUTTON_PADDING_X) || 0;
        const paddingY = parseInt(config.BUTTON_PADDING_Y) || 0;

        // Reset transform if not center
        if (!config.BUTTON_LOCATION.includes("center")) {
          iframe.style.transform = "none";
        }

        switch (config.BUTTON_LOCATION) {
          case "bottom-left":
            iframe.style.bottom = (24 + paddingY) + "px";
            iframe.style.left = (24 + paddingX) + "px";
            iframe.style.top = "auto";
            iframe.style.right = "auto";
            break;
          case "bottom-center":
            iframe.style.bottom = (24 + paddingY) + "px";
            iframe.style.left = "50%";
            iframe.style.transform = "translateX(-50%)";
            iframe.style.top = "auto";
            iframe.style.right = "auto";
            break;
          case "bottom-right":
            iframe.style.bottom = (24 + paddingY) + "px";
            iframe.style.right = (24 + paddingX) + "px";
            iframe.style.top = "auto";
            iframe.style.left = "auto";
            break;
          case "top-left":
            iframe.style.top = (24 + paddingY) + "px";
            iframe.style.left = (24 + paddingX) + "px";
            iframe.style.bottom = "auto";
            iframe.style.right = "auto";
            break;
          case "top-center":
            iframe.style.top = (24 + paddingY) + "px";
            iframe.style.left = "50%";
            iframe.style.transform = "translateX(-50%)";
            iframe.style.bottom = "auto";
            iframe.style.right = "auto";
            break;
          case "top-right":
            iframe.style.top = (24 + paddingY) + "px";
            iframe.style.right = (24 + paddingX) + "px";
            iframe.style.bottom = "auto";
            iframe.style.left = "auto";
            break;
          default:
            iframe.style.bottom = (24 + paddingY) + "px";
            iframe.style.right = (24 + paddingX) + "px";
            iframe.style.top = "auto";
            iframe.style.left = "auto";
        }
      } else {
        iframe.style.maxWidth = "100vw";
        iframe.style.maxHeight = "100vh";
        iframe.style.right = "0px";
        iframe.style.bottom = "0px";
        iframe.style.left = "0px";
        iframe.style.top = "0px";
        iframe.style.transform = "none";
      }
    }

    if (event.data.type === "openLink") {
      window.open(event.data.payload, "_blank");
    }
  });

  if (!config.RENDER_TARGET_ID) {
    // On click outside of the iframe, send close event
    document.addEventListener("click", (event) => {
      if (event.target !== iframe) {
        iframe.contentWindow.postMessage({ type: "close" }, "*");
      }
    });
  }
}

initGenAiChatbot();
