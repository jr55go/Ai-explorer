/*
 * AI Product Explorer 2025
 *
 * This script defines a dataset of AI innovations and provides
 * functions to search and filter through them. The page allows
 * the user to enter a search term and choose a category. Results
 * update automatically as the user interacts with the controls.
 */

// Data set: a curated list of AI products and features for 2025.
// Each entry includes its category, name, company or developer,
// and a brief synopsis describing the innovation. The list is
// intentionally limited for this demo but can be extended easily.
const dataset = [
  {
    category: 'Next-Generation AI Agents & Universal Assistants',
    name: 'Google Project Mariner',
    company: 'Google',
    synopsis:
      'An experimental agent that navigates Chrome like a person, taking control of the cursor, clicking buttons and filling forms to complete tasks.',
  },
  {
    category: 'Next-Generation AI Agents & Universal Assistants',
    name: 'OpenAI ChatGPT Agent',
    company: 'OpenAI',
    synopsis:
      'Available to premium subscribers, this agent can browse the web, execute code, use plugins and connected apps to complete complex tasks.',
  },
  {
    category: 'Next-Generation AI Agents & Universal Assistants',
    name: 'AWS Agentic AI Capabilities',
    company: 'Amazon Web Services',
    synopsis:
      'Tools to automate multi step business processes, respond to changing conditions and make decisions with minimal human input.',
  },
  {
    category: 'Next-Generation AI Agents & Universal Assistants',
    name: 'Microsoft Copilot Vision',
    company: 'Microsoft',
    synopsis:
      'An AI assistant that scans your Windows desktop, identifies tasks and automates workflows by highlighting next steps and linking relevant applications.',
  },
  {
    category: 'Next-Generation AI Agents & Universal Assistants',
    name: 'Airtable Field Agents',
    company: 'Airtable',
    synopsis:
      'Agents embedded within Airtable bases that extract insights, generate concepts or search the web to enrich records without code.',
  },
  // Generative AI for Creative Content & Media
  {
    category: 'Generative AI for Creative Content & Media',
    name: 'OpenAI Sora',
    company: 'OpenAI',
    synopsis:
      'A text to video model that generates high definition clips up to 20 seconds from simple descriptions, available as part of ChatGPT premium plans.',
  },
  {
    category: 'Generative AI for Creative Content & Media',
    name: 'Google Veo 3',
    company: 'Google',
    synopsis:
      'Creates stunning videos with native audio generation, including music and singing, with accurate lip sync and rich visuals.',
  },
  {
    category: 'Generative AI for Creative Content & Media',
    name: 'Google Imagen 4',
    company: 'Google',
    synopsis:
      'An advanced text to image model offering improved text rendering and high quality visuals, available for preview in the Gemini API.',
  },
  {
    category: 'Generative AI for Creative Content & Media',
    name: 'Google Lyria 2',
    company: 'Google',
    synopsis:
      'A music generation model capable of high fidelity audio, complex compositions and rich vocals, accessible through YouTube Shorts and Vertex AI.',
  },
  {
    category: 'Generative AI for Creative Content & Media',
    name: 'YouTube Photo to Video',
    company: 'YouTube',
    synopsis:
      'Transforms any static photo into a dynamic short by selecting an image and applying creative suggestions, making content creation simple.',
  },
  // Advanced LLMs & NLP Breakthroughs
  {
    category: 'Advanced Large Language Models & NLP Breakthroughs',
    name: 'OpenAI GPT 4.5',
    company: 'OpenAI',
    synopsis:
      'An upgraded model focusing on unsupervised learning, delivering strong conversational dialogue and multi step reasoning.',
  },
  {
    category: 'Advanced Large Language Models & NLP Breakthroughs',
    name: 'Google Gemini Ultra',
    company: 'Google',
    synopsis:
      'A multimodal generative model that understands text, voice and images in real time, ideal for complex automation tasks and research.',
  },
  {
    category: 'Advanced Large Language Models & NLP Breakthroughs',
    name: 'Anthropic Claude 3.5',
    company: 'Anthropic',
    synopsis:
      'An advanced agent known for complex reasoning and computer use capabilities, capable of interpreting documents, browsing the web and completing multi step tasks.',
  },
  {
    category: 'Advanced Large Language Models & NLP Breakthroughs',
    name: 'Baidu Ernie 4.5',
    company: 'Baidu',
    synopsis:
      'An open source family of models up to 424 billion parameters, offering multimodal reasoning across text and images under an Apache license.',
  },
  {
    category: 'Advanced Large Language Models & NLP Breakthroughs',
    name: 'Llama 4 Scout',
    company: 'Meta',
    synopsis:
      'An open source model with a very large context window and native multimodal capabilities, suitable for extensive research and document processing.',
  },
  // Enterprise AI & Workflow Automation Platforms
  {
    category: 'Enterprise AI & Workflow Automation Platforms',
    name: 'Airtable AI Native Platform (Omni)',
    company: 'Airtable',
    synopsis:
      'Omni is a conversational interface that allows users to build full apps from a prompt, edit apps in real time and ask strategic questions of data.',
  },
  {
    category: 'Enterprise AI & Workflow Automation Platforms',
    name: 'UiPath Automation Cloud',
    company: 'UiPath',
    synopsis:
      'A unified platform blending computer vision RPA, an AI fabric and process mining dashboards, offering affordable licensing and agentic automation.',
  },
  {
    category: 'Enterprise AI & Workflow Automation Platforms',
    name: 'Microsoft Power Automate',
    company: 'Microsoft',
    synopsis:
      'Now with native Copilot Studio, users can describe flows in plain language. It integrates seamlessly with Microsoft 365 and has hundreds of connectors.',
  },
  {
    category: 'Enterprise AI & Workflow Automation Platforms',
    name: 'Automation Anywhere A360',
    company: 'Automation Anywhere',
    synopsis:
      'A cloud native platform that scales easily and uses Autopilot to generate bots from process maps, ideal for citizen developers.',
  },
  {
    category: 'Enterprise AI & Workflow Automation Platforms',
    name: 'Workato Enterprise iPaaS',
    company: 'Workato',
    synopsis:
      'Combines integration and automation with strong governance and over a thousand connectors. Its AI Steps modules bring natural language powered mapping.',
  },
  // AI Innovations in Specialized Domains
  {
    category: 'AI Innovations in Specialized Domains',
    name: 'AI Model for Early Disease Detection',
    company: 'Researchers',
    synopsis:
      'A predictive model achieving over ninety percent accuracy for detecting diseases like cancer at early stages using patient history, imaging and biomarkers.',
  },
  {
    category: 'AI Innovations in Specialized Domains',
    name: 'AI for Diabetic Eye Disease Detection',
    company: 'Researchers',
    synopsis:
      'Screening system that analyzes retinal images to detect diabetic retinopathy before symptoms arise, expanding access to care.',
  },
  {
    category: 'AI Innovations in Specialized Domains',
    name: 'Google Big Sleep AI System',
    company: 'Google',
    synopsis:
      'A tool that detects and disables dormant web domains vulnerable to cyberattacks, helping prevent digital abuse by analyzing domain behavior.',
  },
  {
    category: 'AI Innovations in Specialized Domains',
    name: 'John Deere Second Generation Autonomy Kit',
    company: 'John Deere',
    synopsis:
      'Autonomy kits using AI and computer vision for tractors and heavy equipment, addressing labor shortages and improving efficiencies.',
  },
  {
    category: 'AI Innovations in Specialized Domains',
    name: 'Caterpillar Autonomous Electric Machinery',
    company: 'Caterpillar',
    synopsis:
      'Semi autonomous and fully autonomous machinery for construction and mining that enhances productivity and safety in tough environments.',
  },
  // Consumer AI & Personalized Experiences
  {
    category: 'Consumer AI & Personalized Experiences',
    name: 'Google Try it on Virtual Try On',
    company: 'Google',
    synopsis:
      'Allows shoppers to visualize clothing on their own body by uploading a full length photo, rolling out across Search, Shopping and Images.',
  },
  {
    category: 'Consumer AI & Personalized Experiences',
    name: 'Google Smarter Price Alerts',
    company: 'Google',
    synopsis:
      'Monitors deals across the web based on size, color and price preferences, sending notifications only when criteria are met.',
  },
  {
    category: 'Consumer AI & Personalized Experiences',
    name: 'Lenovo Chromebook Plus 14 AI Features',
    company: 'Lenovo',
    synopsis:
      'Offers smart grouping of tabs and documents, AI image editing in the gallery and the ability to extract editable text from images.',
  },
  {
    category: 'Consumer AI & Personalized Experiences',
    name: 'Samsung AI Integrated Refrigerator',
    company: 'Samsung',
    synopsis:
      'Monitors food freshness, suggests recipes using near expiry ingredients and helps build grocery lists with intelligent notifications.',
  },
  {
    category: 'Consumer AI & Personalized Experiences',
    name: 'Meta AI Consumer Assistant',
    company: 'Meta',
    synopsis:
      'A generative video editing feature in the Meta app that transforms short videos with one click prompts, changing outfits, backgrounds and lighting.',
  },
  // Core AI Infrastructure & Developer Tools
  {
    category: 'Core AI Infrastructure & Developer Tools',
    name: 'OpenAI and Oracle Stargate Deal',
    company: 'OpenAI / Oracle',
    synopsis:
      'A partnership announced in July to build AI data centers supporting massive computational demands for next generation models.',
  },
  {
    category: 'Core AI Infrastructure & Developer Tools',
    name: 'AWS Bedrock AgentCore',
    company: 'Amazon Web Services',
    synopsis:
      'Enables rapid deployment and scaling of AI agents with enterprise grade security, memory management and tool integration.',
  },
  {
    category: 'Core AI Infrastructure & Developer Tools',
    name: 'AWS Amazon S3 Vectors',
    company: 'Amazon Web Services',
    synopsis:
      'A cloud object store that adds native support for storing and querying vectors at scale, reducing costs for AI applications.',
  },
  {
    category: 'Core AI Infrastructure & Developer Tools',
    name: 'Microsoft Windows AI Foundry',
    company: 'Microsoft',
    synopsis:
      'A unified local AI platform that allows developers to deploy foundation models directly within Windows applications, bypassing the cloud for low latency.',
  },
  {
    category: 'Core AI Infrastructure & Developer Tools',
    name: 'Nvidia Project DIGITS',
    company: 'Nvidia',
    synopsis:
      'A personal AI supercomputer the size of a laptop that lets users develop and run models locally before deploying them to the cloud.',
  },
];

// Populate the category filter with unique categories.
function populateCategoryFilter() {
  const select = document.getElementById('categoryFilter');
  const categories = Array.from(new Set(dataset.map((item) => item.category)));
  categories.sort();
  categories.forEach((cat) => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

// Filter the dataset based on search term and selected category.
function getFilteredData() {
  const searchTerm = document
    .getElementById('searchInput')
    .value.trim()
    .toLowerCase();
  const selectedCategory = document.getElementById('categoryFilter').value;
  return dataset.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm) ||
      item.company.toLowerCase().includes(searchTerm) ||
      item.synopsis.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

// Render the filtered data into the results container.
function renderResults() {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';
  const data = getFilteredData();
  if (data.length === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent =
      'No matching AI tools found. Try adjusting your search or filter.';
    resultsContainer.appendChild(noResults);
    return;
  }
  data.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    const title = document.createElement('h3');
    title.textContent = item.name;
    const company = document.createElement('div');
    company.className = 'company';
    company.textContent = item.company;
    const synopsis = document.createElement('p');
    synopsis.textContent = item.synopsis;
    card.appendChild(title);
    card.appendChild(company);
    card.appendChild(synopsis);
    resultsContainer.appendChild(card);
  });
}

// Initialize page events and render initial results.
function init() {
  populateCategoryFilter();
  renderResults();
  // Update results whenever the user types or changes filter.
  document
    .getElementById('searchInput')
    .addEventListener('input', renderResults);
  document
    .getElementById('categoryFilter')
    .addEventListener('change', renderResults);
}

// Run init once the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', init);