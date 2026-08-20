# Advisible Native templates

Designing native ads can be split into three parts:
- outer layout – how creatives are positioned in the page,
- inner layout – structure of the elements in the creative, and
- styling – colors, fonts and borders etc.

## Outer layout
`adk-container`

`adk-container-margin`

## Styling

### Class names
These are the class names we use in our templates, but feel free to change them as needed for your site.

`native-teaser` – outer container of the teaser.

`native-teaser__marking` – ad disclaimer element, displayed at the very top of the creative.

`native-teaser__asset` – container for the media content, which maintains the aspect ratio and prevents content shift and overflow.

`native-teaser__text` – wrapper for the text content, which adds optional padding around the headline and lead.

`native-teaser__headline` – headline styling.

`native-teaser__lead` – lead styling, usually thinner and smaller than the headline.

### Dark mode
All colors are defined using variables, and each stylesheet contains a media query for dark mode, which is applied when the user has activated dark mode in the device.

**Important.** Delete the dark mode media query if the site does not support dark mode. Otherwise, the ads will look funny.
