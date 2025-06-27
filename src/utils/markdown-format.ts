import { marked } from "marked";
import note from '../assets/markdown/note.svg?raw';
import warning from '../assets/markdown/warning.svg?raw';
import important from '../assets/markdown/important.svg?raw';
import tip from '../assets/markdown/tip.svg?raw';
import caution from '../assets/markdown/caution.svg?raw';

export const markdownConfig = {
  headerIds: true,
  gfm: true,
  breaks: true,
};

// Create a mapping between callout types and their SVG imports
const calloutIcons = {
  note,
  warning,
  important,
  tip,
  caution
};

const renderer = {
  // For inline code (`)
  codespan(token: any): string {
    return `<code class="inline-code">${token.text}</code>`;
  },

 blockquote(tokens: any): string {
    const quote = tokens.text.trim();

    // Check for special notation like [!NOTE], [!WARNING], etc.
    const match = quote.match(/^\[!(NOTE|WARNING|IMPORTANT|TIP|CAUTION)\]\s+/);

    if (match) {
      const type = match[1].toLowerCase();
      const content = quote.replace(match[0], "").trim();
      const typeDisplay = type.charAt(0).toUpperCase() + type.slice(1);
      
      // Get the SVG data URL from our mapping
      const iconDataUrl = calloutIcons[type as keyof typeof calloutIcons];
      
      return `<div class="callout callout-${type}">
        <p class="callout-title callout-title-${type}">
          <span class="callout-icon callout-icon-${type}">${iconDataUrl}</span>
          ${typeDisplay}
        </p>
        <p class="callout-content">${content}</p>
      </div>`;
    }

    // Default blockquote handling
    return `<blockquote>${tokens.text}</blockquote>`;
  },
};

marked.use({ renderer });

export const parseMarkdown = (content: string): string => {
  marked.setOptions(markdownConfig);
  return marked.parse(content);
};